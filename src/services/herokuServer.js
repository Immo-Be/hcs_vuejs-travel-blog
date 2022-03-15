// import BlogPostDetail from "../components/main/BlogPostDetail/BlogPostDetail.vue"
// import Dashboard from "../components/main/Dashboard.vue"
// import BlogPostDetail from "../components/main/BlogPostDetail/BlogPostDetail.vue"

const HEROKU_SERVER_URL = 'https://hcs-finalproject.herokuapp.com/';


async function getAllTrips() {

    const url = HEROKU_SERVER_URL;
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

// async function updateTripsWithWeatherInfo(data) {
//     // alert("update is called")
//     // console.log(data)
    
//     const url = HEROKU_SERVER_URL + "/update";
//     const response = await fetch(url, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });
//     const result = await response.json();
//     // alert("result")
//     // console.log(result)

//     // initData()
//     // BlogPostDetail.methods.initData()


//     return result;
// }

async function addTrip(newTrip) {
    // console.log(newTrip)
    
    const url = HEROKU_SERVER_URL + "/id";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrip)
    });
    const result = await response.json();
    alert(result)

    return result;
};

async function updateTrip(trip) {
    // console.log(trip)
    
    const url = HEROKU_SERVER_URL + "/update";
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    });
    // alert("helloo")

    const result = await response.json();
    // console.log(result)

    return result;
};

async function deleteTrip(trip) {
    console.log(trip)
    
    const url = HEROKU_SERVER_URL + "/deleteTrip";
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    });

    const result = await response.json();

    return result;
};




export default {
    getAllTrips,
    // updateTripsWithWeatherInfo,
    addTrip,
    updateTrip,
    deleteTrip

}