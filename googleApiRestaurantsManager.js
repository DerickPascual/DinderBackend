require('dotenv').config();
const { Client } = require("@googlemaps/google-maps-services-js");
const Restaurant = require('./classes/Restaurant.js');
const { setTimeout } = require("timers/promises");

const client = new Client({});

const getRestaurantsFromResults = (results) => {
    const restaurants = []

    // for filtering out fast food restaurants
    const chainCount = [
        { name: "Starbucks", count: "0"  },
        { name: "Mcdonalds", count: "0" },
        { name: "Subway", count: "0" },
        { name: "Olive Garden", count: "0" }
    ]

    for (const restaurant of results) {

        let repeatChainFound = false;
        for (const chain of chainCount) {
            if (restaurant.name.toUpperCase().includes(chain.name.toUpperCase())) {
                if (chain.count >= 1) {
                    repeatChainFound = true;
                } else {
                    chain.count++;
                }
            }
        }

        if (repeatChainFound) {
            continue;
        }

        const newRestaurant = new Restaurant(
            restaurant.place_id,
            restaurant.name,
            restaurant.rating,
            restaurant.price_level,
            restaurant.user_ratings_total,
        )

        restaurants.push(newRestaurant);
    }

    return restaurants;
}

const addDetailsToRestaurant = async (restaurant) => {
    const requestParams = {
        place_id: restaurant.placeId,
        fields: [
            'formatted_address',
            'photo',
            'url',
            'opening_hours',
            'editorial_summary',
            'reviews'
        ],
        key: process.env.GOOGLE_PLACES_API_KEY
    }

    await client.placeDetails({
        params: requestParams
    }).then((response) => {
        const restaurantDetails = response.data.result;

        if (restaurantDetails.formatted_address) {
            restaurant.address = restaurantDetails.formatted_address;
        }

        if (restaurantDetails.url) {
            restaurant.url = restaurantDetails.url;
        }

        if (restaurantDetails.opening_hours && restaurantDetails.opening_hours.weekday_text) {
            restaurant.hours = restaurantDetails.opening_hours.weekday_text;
        }

        if (restaurantDetails.editorial_summary && restaurantDetails.editorial_summary.overview) {
            restaurant.description = restaurantDetails.editorial_summary.overview;
        }

        if (restaurantDetails.photos) {
            let photoCount = 0;
            for (const photo of restaurantDetails.photos) {
                if (photoCount >= 5) break;

                restaurant.photoUrls.push(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo.photo_reference}&key=${process.env.CLIENT_SIDE_GOOGLE_PLACES_API_KEY}&maxwidth=1600&maxheight=1600`);
                photoCount++;
            }
        }

        if (restaurantDetails.reviews) {
            for (const review of restaurantDetails.reviews) {
                restaurant.reviews.push({
                    url: review.author_url,
                    profilePhoto: review.profile_photo_url,
                    rating: review.rating,
                    relativeTimeDescription: review.relative_time_description,
                    text: review.text
                })
            }
        }

        restaurant.hasDetails = true;
    }).catch((err) => {
        console.log(err);
    });
}

const addDetailsToRestaurants = async (restaurants) => {
    for (const restaurant of restaurants) {
        await addDetailsToRestaurant(restaurant);
    }
};

const getInitialResults = async (lat, lng, radius) => {
    const radiusInMeters = radius * 1609.34;

    const requestParams = {
        location: `${lat},${lng}`,
        type: "restaurant",
        radius: radiusInMeters,
        opennow: true,
        key: process.env.GOOGLE_PLACES_API_KEY
    }

    let results;
    let nextPageToken = null;

    await client.placesNearby({
        params: requestParams
    }).then(async (response) => {
        results = response.data.results;

        nextPageToken = response.data.next_page_token;
    }).catch((error) => {
        console.log(error);
    });

    const returnObj = { results: results, nextPageToken: nextPageToken };
    return returnObj;
}

const getAdditionalResults = async (pageToken) => {
    if (!pageToken) {
        return;
    }

    const requestParams = {
        pagetoken: pageToken,
        key: process.env.GOOGLE_PLACES_API_KEY
    }

    let results;
    let nextPageToken = null;

    await client.placesNearby({
        params: requestParams
    }).then(async (response) => {
        results = response.data.results;

        nextPageToken = response.data.next_page_token;

    }).catch((err) => {
        console.log(err);
    });

    const returnObj = { results: results, nextPageToken: nextPageToken };
    return returnObj;
}

const getRestaurants = async (lat, lng, radius) => {
    const initialResults = await getInitialResults(lat, lng, radius);

    let additionalResults = { results: [], nextPageToken: null }

    /* Uncomment for 40 restaurants
    if (initialResults.nextPageToken) {
        await setTimeout(3000);
        additionalResults = await getAdditionalResults(initialResults.nextPageToken);
    }
    */

    const restaurants = getRestaurantsFromResults([...initialResults.results, ...additionalResults.results]);

    await addDetailsToRestaurants(restaurants);

    return { restaurants: restaurants, nextPageToken: additionalResults.nextPageToken }
}

// OLD METHODS
const getInitialRestaurants = async (lat, lng, radius) => {

    const radiusInMeters = radius * 1609.34;

    const requestParams = {
        location: `${lat},${lng}`,
        type: "restaurant",
        radius: radiusInMeters,
        opennow: true,
        key: process.env.GOOGLE_PLACES_API_KEY
    }

    let restaurants;
    let nextPageToken = null;

    await client.placesNearby({
        params: requestParams
    }).then(async (response) => {
        const results = response.data.results;

        nextPageToken = response.data.next_page_token;

        restaurants = getRestaurantsFromResults(results);

        await addDetailsToRestaurants(restaurants);
    }).catch((error) => {
        console.log(error);
    });

    const returnObj = { restaurants: restaurants, nextPageToken: nextPageToken };
    return returnObj;
}

const getAdditionalRestaurants = async (pageToken) => {
    await setTimeout(3000);

    if (!pageToken) {
        return;
    }

    const requestParams = {
        pagetoken: pageToken,
        key: process.env.GOOGLE_PLACES_API_KEY
    }

    let restaurants;
    let nextPageToken = null;

    await client.placesNearby({
        params: requestParams
    }).then(async (response) => {
        const results = response.data.results;

        nextPageToken = response.data.next_page_token;

        restaurants = getRestaurantsFromResults(results);

        await addDetailsToRestaurants(restaurants);
    }).catch((err) => {
        console.log(err);
    });

    const returnObj = { restaurants: restaurants, nextPageToken: nextPageToken };
    return returnObj;
}

module.exports = { getInitialRestaurants, getAdditionalRestaurants, getRestaurants };