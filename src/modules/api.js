
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