const weatherForm = document.querySelector('#weather-form');

const registerLocationSubmit = () => {
    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Submitted');
    });
};

export { registerLocationSubmit };