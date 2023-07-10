const weatherForm = document.querySelector('#weather-form');
let location = 'london';

//Check syntax
const getLocation = async () => {
    return location;
};

const registerLocationSubmit = () => {
    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault();
        getLocation();
        console.log('Submitted');
    });
};

export { registerLocationSubmit, getLocation };