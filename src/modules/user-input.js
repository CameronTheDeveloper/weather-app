import { manageWeatherData } from "./api";

const weatherForm = document.querySelector('#weather-form');
const locationInput = document.querySelector('#location-input');
let location = 'london';

const setLocation = (newLocation) => {
    location = newLocation;
};

const getLocation = () => {
    return location;
};

const getLocationInput = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newLocation = locationInput.value;
            resolve(newLocation);
        }, 200);
    })
        .then((newLocation) => {
            setLocation(newLocation);
            return newLocation;
        })
        .catch((e) => {
            console.log('Location Input Error: ', e);
            throw e;
        });
};

const manageLocationInput = async () => {
    const newLocation = await getLocationInput();
    manageWeatherData();
};

const registerLocationSubmit = () => {
    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault();
        manageLocationInput();
    });
};

export { registerLocationSubmit, getLocation };