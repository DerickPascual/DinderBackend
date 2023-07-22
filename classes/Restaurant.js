class Restaurant {
    constructor(placeId, name, ratingValue, priceLevel, numberRatings, description="", url="", address="", hours=[], reviews=[], photoUrls=[]) {
        // retrieved with PlacesSearch
        this.placeId = placeId;
        this.name = name;
        this.address = address;
        this.ratingValue = ratingValue;
        this.priceLevel = priceLevel;
        this.numberRatings = numberRatings;

        // retrieved/edited with PlaceDetails
        if (!description || !url || !address) {
            this.hasDetails = false;
        }

        this.description=description
        this.url = url;
        this.hours = hours;
        this.reviews = reviews;
        this.photoUrls = photoUrls;
    }
}

module.exports = Restaurant;