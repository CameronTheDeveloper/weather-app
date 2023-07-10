const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=32832b2586e74bf3be920337230607&q=';
let location = 'seattle';

const fetchWeather = async () => {
    try {
        const weather = await fetch(weatherURL + location, { mode: 'cors' });

        const weatherData = await weather.json();
        console.log(weatherData);
        return weatherData;
    }
    catch (e) {
        console.log('Error fetching weather: ', e);
    }
};

const manageWeatherData = async () => {
    //const location = await getLocation()
    await fetchWeather();
};
