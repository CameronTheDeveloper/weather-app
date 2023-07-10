const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=32832b2586e74bf3be920337230607&q=london';
const getWeather = async () => {
    try {
        const weather = await fetch(weatherURL, { mode: 'cors' });

        const weatherData = await weather.json();
        // if (weatherData === rain){
        //     console.log('rain');
        // }
        console.log(weatherData);
        return weatherData;
    }
    catch (e) {
        console.log('Weather Error', e);
    }
};

//Check syntax
const getLocation = () => {
    return new fetch('')
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log('Location Error', e);
        });
};

const displayWeather = async () => {
    //const location = await getLocation()
    getWeather();
};

export { displayWeather };