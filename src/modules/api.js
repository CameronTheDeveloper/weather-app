
const getWeather = async () => {
    try {
        const weather = await fetch('', { mode: 'cors' });

        const weatherData = await weather.json();
        // if (weatherData === rain){
        //     console.log('rain');
        // }
        console.log(weatherData);
        return weatherData;
    }
    catch (e) {
        console.log('Weather Error');
    }


};

const getLocation = async () => {

};