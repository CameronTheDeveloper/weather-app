import { getLocation } from "./user-input";

const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=32832b2586e74bf3be920337230607&q=';

const getTempF = async (weatherData) => {
    try {
        const temp = weatherData.current.temp_f;
        return temp;
    } catch (e) {
        console.log('Error getting temperature: ', e);
        throw (e);
    }
};

const fetchWeather = async (location) => {
    try {
        const weather = await fetch(weatherURL + location, { mode: 'cors' });

        const weatherData = await weather.json();
        return weatherData;
    }
    catch (e) {
        console.log('Error fetching weather: ', e);
        throw e;
    }
};

const manageWeatherData = async () => {
    const location = getLocation();
    const weatherData = await fetchWeather(location);
    const tempF = await getTempF(weatherData);
    //Process weatherData json

};

export { manageWeatherData };
