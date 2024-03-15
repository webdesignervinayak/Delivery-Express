export const LOGO_URL = "https://img.freepik.com/premium-vector/express-delivery-logo-design-vector-template_441059-204.jpg?w=740";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4385553&lng=79.1288412&restaurantId=";

export const ITEM_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const API_KEY = "7f142b1dd2aaff9096d57b79a77f92aa"

export const RESTRO_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat="

export const defaultLocation = {
    "name": "Karimnagar",
    "local_names": {
        "en": "Karimnagar",
        "sr": "Каримнагар",
        "pa": "ਕਰੀਮਨਗਰ",
        "he": "קרימנגר",
        "ta": "கரீம்நகர்",
        "ar": "كاريمناغار",
        "ru": "Каримнагар",
        "ml": "കരീംനഗർ",
        "te": "కరీంనగర్",
        "hi": "करीमनगर",
        "ja": "カリームナガル",
        "kn": "ಕರೀಂನಗರ್",
        "ur": "کریم نگر"
    },
    "lat": 18.4348122,
    "lon": 79.1328042,
    "country": "IN",
    "state": "Telangana"};

    export const PROXY_CORS = "https://thingproxy.freeboard.io/fetch/";

    export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL);