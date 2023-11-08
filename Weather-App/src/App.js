import React from 'react';
import ZipForm from './components/ZipForm.js';
import { getLocation } from './Utilities/Api.js';
import { getWeather } from './Utilities/Api.js';
import CurrentDay from './components/CurrentDay';
import { useState } from 'react';
import './App.css'

const App = () => {
  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSubmit = async (zipcode) => {
    try {
      const retrievedCity = await getLocation(zipcode);
      setCity(retrievedCity);
      
      const retrievedForecast = await getWeather(retrievedCity.lat, retrievedCity.lon);
      setForecast(retrievedForecast);

      setSelectedDay(null);
    } catch (error) {
      console.error('Error:', error);
    }
   
  };
  const handleDayClick = (index) => {
  
    setSelectedDay(forecast[index]);
  };

  return (
    <div className="App">
      <ZipForm onSubmit={handleSubmit} />
      {forecast.length > 0 && (
        <CurrentDay city={city} forecastDay={forecast[0]} />
        
      )
      }
      
    </div>
  );
};

export default App;