// const weatherSlot1 = document.querySelector('#weather-slot1');
const weatherSlots = document.querySelectorAll('.weather-slot');

const displayTempF = (tempF, slot) => {
    const tempSlot = slot.querySelector('.temp');
    tempSlot.innerHTML = tempF;
};

const displayWeather = (weather, slot) => {
    const tempSlot = slot.querySelector('.weather');
    tempSlot.innerHTML = weather;
};

const displayForecast = (tempF, condition) => {
    weatherSlots.forEach((slot) => {
        displayWeather(condition.text, slot);
        displayTempF(tempF, slot);
    });
};

export { displayForecast };