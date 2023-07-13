const weatherSlot1 = document.querySelector('#weather-slot1');

const displayTempF = (tempF) => {
    weatherSlot1.innerHTML = tempF;
};

const displayWeather = () => {

};

const displayForecast = (tempF) => {
    displayTempF(tempF);
};

export { displayForecast };