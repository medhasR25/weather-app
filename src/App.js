import React, { useState } from 'react';
import Weather from './components/Weather';
import Header from './components/Header'; // Import the new Header component
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    setCity(inputCity);
  };

  return (
    <div className="App dark-mode"> {/* Default to dark mode */}
      <Header /> {/* Add the Header component */}
      <header className="App-header">
        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
        <Weather city={city} />
      </header>
    </div>
  );
};

export default App;
