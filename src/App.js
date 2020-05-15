import React, {useState} from 'react';

const weatherAPI = {
  key: "f621c0040cfe30f83f667e55c37eafec",
  url: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = event => {
    if (event.key === "Enter") {
      fetch (`${weatherAPI.url}weather?q=${query}&units=imperial&APPID=${weatherAPI.key}`)
        .then(response => response.json())
        .then(result => {setWeather (result); 
        setQuery('');});
      
    }
  }


const dateCreator = (dates) =>{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let day = days[dates.getDay()];
  let date = dates.getDate();
  let month = months[dates.getMonth()];
  let year = dates.getFullYear();

  return `${day} ${month} ${date} ${year}`
}

  return (
    <div className= {(typeof weather.main != "undefined") ? ("App "+ weather.weather[0].main) : "App"}>
      <main>
       <div className = "search-box">
          <input type = "text" className = "search-bar" placeholder = "City..." onChange = {event => setQuery (event.target.value)} value = {query} onKeyPress = {search}/>
      </div>
      {(typeof weather.main != "undefined") ? (
    <div>
      <div className = "location-box">
        <div className = "location">{weather.name}, {weather.sys.country}</div>
        <div className = "date"> {dateCreator (new Date())}</div>
      </div>
      <div className = "weather-box">
          <div className = "temp">{Math.round(weather.main.temp)}°F</div>
          <div className = "weather">{weather.weather[0].main}</div>
          <div className = "feels">Feels like</div>
          <div className = "temp-feel">{Math.round(weather.main.feels_like)}°F</div>
      </div>
    </div>  
  ) : <div className = "default">Please search for a location! E.g : Santa Cruz, US </div>}  
      </main>
    </div>
    
  );
}

export default App;
