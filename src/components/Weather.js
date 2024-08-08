import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch current weather data
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            appid: 'c4594e42d223f012c15fc87028b93c70',  // Your actual API key
            units: 'metric'
          }
        });

        setWeatherData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {weatherData && (
        <>
          <WeatherCard
            title="Temperature"
            value={`${weatherData.main.temp} °C`}
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
          />
          <WeatherCard
            title="Feels Like"
            value={`${weatherData.main.feels_like} °C`}
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
          />
          <WeatherCard
            title="Humidity"
            value={`${weatherData.main.humidity} %`}
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
          />
          <WeatherCard
            title="Wind Speed"
            value={`${weatherData.wind.speed} m/s`}
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
          />
        </>
      )}
    </div>
  );
};

export default Weather;
