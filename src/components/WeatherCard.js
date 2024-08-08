import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

import ThermostatIcon from '@mui/icons-material/Thermostat'; // Temperature Icon
import OpacityIcon from '@mui/icons-material/Opacity'; // Humidity Icon
import AirIcon from '@mui/icons-material/Air'; // Wind Speed Icon
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'; // Feels Like Icon

const iconMapping = {
  Temperature: <ThermostatIcon fontSize="large" sx={{ color: '#ff8c00' }} />,
  Humidity: <OpacityIcon fontSize="large" sx={{ color: '#00bcd4' }} />,
  'Wind Speed': <AirIcon fontSize="large" sx={{ color: '#76c7c0' }} />,
  'Feels Like': <DeviceThermostatIcon fontSize="large" sx={{ color: '#ff5722' }} />,
};

const WeatherCard = ({ title, value, icon, description }) => {
  const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Card sx={{
      maxWidth: 345,
      margin: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',  /* Very transparent background */
      backdropFilter: 'blur(15px)',                 /* Enhanced blur effect for more glassy look */
      borderRadius: '15px',                         /* Rounded corners */
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',   /* Slightly enhanced shadow */
      border: '1px solid rgba(255, 255, 255, 0.2)', /* Light border */
      overflow: 'hidden',                           /* Ensure children respect the border radius */
      padding: '10px',
    }}>
      <CardMedia
        component="img"
        alt={description}
        height="100"
        image={weatherIconUrl}
        sx={{
          objectFit: 'contain',
          margin: 'auto',
        }}
      />
      <CardContent sx={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          {iconMapping[title]} {/* Display the relevant icon */}
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f5f5f7', marginLeft: '10px' }}>
            {title}
          </Typography>
        </div>
        <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
          {description}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: '#f5f5f7', marginTop: '10px' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

WeatherCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WeatherCard;
