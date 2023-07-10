const weatherForm = document.querySelector('#weather-form');
const locationInput = document.querySelector('#location-input');
let location = 'london';

const setLocation = (newLocation) => {
    location = newLocation;
};

const getLocation = async () => {
    return location;
};

const getLocationInput = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newLocation = locationInput.value;
            resolve(newLocation);
        }, 500);
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

const registerLocationSubmit = () => {
    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
};

export { registerLocationSubmit, getLocation };