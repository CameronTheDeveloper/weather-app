const weatherSlot1 = document.querySelector('#weather-slot1');

const displayWeather = (tempF) => {
    weatherSlot1.innerHTML = tempF;
};

export { displayWeather };