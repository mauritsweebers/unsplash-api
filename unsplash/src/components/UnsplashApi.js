// get api key out of .env file
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
const API_URL = "https://api.unsplash.com/"

const UnsplashApi = (call) => {
    /* 

    OPTIONAL PARAMETERS TO USE

    GET /photos
        setup api parameters
        page (Optional; default: 1)
        per_page (Optional; default: 10)
        order_by (latest, oldest, popular; default: latest)

    GET /search/photos
        query
        page (Optional; default: 1)
        per_page (Optional; default: 10)
        order_by (Optional; default: relevant). Valid values are latest and relevant
        collections (Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated)
        content_filter -- Limit results by content safety. (Optional; default: low). Valid values are low and high.)
        color (Optional. Valid values are: black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue)
        orientation Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish)
    
    */

    let get_url = (call.query === undefined || call.query === '') ? "photos?" : "search/photos?"

    // Serialize Object
    const serialize = (obj) => {
        let str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p) && obj[p] !== '') {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
    get_url += serialize(call)

    const fetchData = fetch(API_URL+get_url, {
        method: "GET",
        headers: {
            'mode': 'no-cors',
            'content-type': 'application/json', 
            'Accept-Version': 'v1', 
            'Authorization': 'Client-ID '+API_KEY
        }
    })
    
    // returns a promise!!
    return fetchData;
}

export default UnsplashApi