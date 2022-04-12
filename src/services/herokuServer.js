// const HEROKU_SERVER_URL = 'https://hcs-expressjs-sql.herokuapp.com';
const HEROKU_SERVER_URL = 'https://hcs-finalproject.herokuapp.com';
// const HEROKU_SERVER_URL = 'http://localhost:3002';



async function getAllTrips() {

    const url = HEROKU_SERVER_URL;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    // return result.result; -> For SQL only
    return result
};


async function addTrip(newTrip) {
    
    const url = HEROKU_SERVER_URL + "/id";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrip)
    });

};

async function updateTrip(trip) {
    
    const url = HEROKU_SERVER_URL + "/update";
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    });

    const result = await response.json();

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
    addTrip,
    updateTrip,
    deleteTrip
};