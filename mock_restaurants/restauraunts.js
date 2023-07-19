const restaurants = [
    {
        name: 'Biggie Hub',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 3.2,
        priceLevel: 3,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    },
    {
        name: 'Jungle Kingdom',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 5,
        priceLevel: 2,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, {
        name: 'The Spot',
        imgUrl: './RedRobin.jpg',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 3.7,
        priceLevel: 1,
        reviews: [
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, {
        name: 'Let us Eat',
        imgUrl: './RedRobin.jpg',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 4.2,
        priceLevel: 2,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, {
        name: 'Food Place',
        imgUrl: './RedRobin.jpg',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 4.3,
        priceLevel: 3,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, {
        name: 'Hungry Cow',
        imgUrl: './RedRobin.jpg',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 4.1,
        priceLevel: 2,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, {
        name: 'Yummy Grill',
        imgUrl: './RedRobin.jpg',
        address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
        hours: [
            "Monday: 9:00 AM – 5:00 PM",
            "Tuesday: 9:00 AM – 5:00 PM",
            "Wednesday: 9:00 AM – 5:00 PM",
            "Thursday: 9:00 AM – 5:00 PM",
            "Friday: 9:00 AM – 5:00 PM",
            "Saturday: Closed",
            "Sunday: Closed",
        ],
        ratingValue: 4.4,
        priceLevel: 1,
        reviews: [
            {
                author: "Luke Archibald",
                url: "https://www.google.com/maps/contrib/113389359827989670652/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo",
                rating: 3,
                relativeTimeDescription: "a week ago",
                text: "Called regarding paid advertising google pages to the top of its site of a scam furniture website misleading and taking peoples money without ever sending a product - explained the situation,  explained I'd spoken to an ombudsman regarding it.  Listed ticket numbers etc.\n\nThey left the advertisement running."
            },
            {
                author: "Tevita Taufoou",
                url: "https://www.google.com/maps/contrib/105937236918123663309/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "6 months ago",
                text: "I need help.  Google Australia is taking my money. Money I don't have any I am having trouble sorting this issue out"
            },
            {
                author: "Jordy Baker",
                url: "https://www.google.com/maps/contrib/102582237417399865640/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo",
                rating: 1,
                relativeTimeDescription: "4 months ago",
                text: "I have literally never been here in my life, I am 17 and they are taking money I don't have for no reason.\n\nThis is not ok. I have rent to pay and my own expenses to deal with and now this."
            },
            {
                author: "Prem Rathod",
                url: "https://www.google.com/maps/contrib/115981614018592114142/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 4,
                relativeTimeDescription: "4 months ago",
                text: "Terrible service. all reviews are fake and irrelevant. This is about reviewing google as business not the building/staff etc."
            },
            {
                author: "Husuni Hamza",
                url: "https://www.google.com/maps/contrib/102167316656574288776/reviews",
                profilePhoto: "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo",
                rating: 5,
                relativeTimeDescription: "7 months ago",
                text: "Nice site. Please I want to work with you. Am Alhassan Haruna, from Ghana. Contact me +233553851616"
            }
        ],
        numberRatings: 1238,
        url: "https://maps.google.com/?cid=10281119596374313554",
        photoUrls: [
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
            "../../images/RedRobin.jpg",
        ]
    }, 
]

module.exports = restaurants;