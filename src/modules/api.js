import { getLocation } from "./user-input";

const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=32832b2586e74bf3be920337230607&q=';

const fetchWeather = async (location) => {
    try {
        const weather = await fetch(weatherURL + location, { mode: 'cors' });

        const weatherData = await weather.json();
        console.log(location);
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
    console.log(weatherData);
    //Process weatherData json

};

export { manageWeatherData };
