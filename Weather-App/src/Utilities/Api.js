import dates from './dates'
import { parseForecast } from './weatherParsing';
import axios from 'axios'

const apikey = "e366707bc2ea3e949fb1c0a16ce76d59"
const geoBaseUrl = 'http://api.openweathermap.org/geo/1.0/zip?zip=';

export const getLocation = async (zipcode) => {

    try {
        const geoUrl = `${geoBaseUrl}${zipcode}&`;
        const response = await axios.get(geoUrl, { params: { appid: apikey } });
    
        const { name, lat, lon } = response.data;
        return { name, lat, lon };
      } catch (error) {
      
        throw new Error('Error getting location data: ' + error.message);
      }
    }



export const getWeather = async (lat, lon) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&apikey=${apikey}`;

    try {
        const response = await axios.get(weatherUrl);

        return parseForecast(response.data.list);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
