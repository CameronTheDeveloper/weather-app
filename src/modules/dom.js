// const weatherSlot1 = document.querySelector('#weather-slot1');
const weatherSlots = document.querySelectorAll('.weather-slot');

const displayTempF = (tempF, slot) => {
    const tempSlot = slot.querySelector('.temp');
    tempSlot.innerHTML = tempF;
};

const displayWeather = () => {
    //Rain/Fog/etc.
};

const displayForecast = (tempF) => {
    weatherSlots.forEach((slot) => {
        displayTempF(tempF, slot);
    });
};

export { displayForecast };