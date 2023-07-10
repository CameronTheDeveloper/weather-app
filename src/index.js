import { displayWeather } from "./modules/api";
import { initApp } from './modules/operate.js';

const initPage = () => {
    displayWeather();

};

initApp();
initPage();
