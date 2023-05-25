import axios from 'axios';

const API_KEY = '5ecbd2d1ef6a0b672141b8e1087869d1'; // Replace with your OpenWeather API key
// location kota bharu in kelantan

const getWeatherData = (location) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
  
}

export default getWeatherData;