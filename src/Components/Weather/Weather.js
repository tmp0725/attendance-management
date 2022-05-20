import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Weather.css';

const api = {
  key: "c710d150f94a1fd1ed57137b3e372bcd",
  url: "https://api.openweathermap.org/data/2.5/"
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery("")
          console.log(result)
        });
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Weather in your city ..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <>
            <div className="wether-info">
              <div className="wether-info-location">{weather.name}, {weather.sys.country}</div>
              <div className="wether-info-date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-info-temp">{Math.round(weather.main.temp)}℃</div>
            <div className="weather-info-weather">{weather.weather[0].main}</div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description} />
          </>
        ) : ("")}
      </main>
    </>
  )
};

export default Weather;