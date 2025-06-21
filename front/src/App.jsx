import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Major from "./components/Major";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import './App.css';
import Cities from './components/Cities'
function App() {
    const [city,setCity]=useState("Chennai")
    const [weatherData, setWeatherData] = useState("");
    const [forecastData, setForecastData] = useState("");
    const [dayForecast,setDayForecast]=useState('');

   useEffect(() => {
  const baseURL = process.env.REACT_APP_API_URL;

  axios.post(`${baseURL}/`, { city }, { withCredentials: true })
    .then(response => setWeatherData(response.data))
    .catch(err => console.error("Weather data error:", err));

  axios.post(`${baseURL}/forecast`, { city }, { withCredentials: true })
    .then(response => setForecastData(response.data))
    .catch(err => console.error("Forecast error:", err));

  axios.post(`${baseURL}/dayforecast`, { city }, { withCredentials: true })
    .then(response => setDayForecast(response.data))
    .catch(err => console.error("Day forecast error:", err));
}, [city]);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/city" element={
                    <div className="main">
                        <Navbar setWeatherData={setWeatherData} setCity={setCity} />
                        <Cities setWeatherData={setWeatherData} setForecastData={setForecastData} setCity={setCity} />
                    </div>
                        } />
                    <Route path="/" element={
                    <div className="main">
                        <Search setWeatherData={setWeatherData} setForecastData={setForecastData} setCity={setCity}/>
                        <Navbar setWeatherData={setWeatherData}setCity={setCity} />
                        <Major weatherData={weatherData} forecastData={forecastData}setCity={setCity} />       
                        <Sidebar forecastData={forecastData} dayForecast={dayForecast} />
                    </div>
                } />
                </Routes>
            </Router>

        </div>
    );
}

export default App;
