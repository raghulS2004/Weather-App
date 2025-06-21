// back/index.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.vercel.app'], // include deployed frontend here
  credentials: true
}));

// ----------------------------
// Route: Current Weather (OpenWeatherMap)
// ----------------------------
app.post('/', async (req, res) => {
  const city = req.body.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("✅ OpenWeather success for:", city);
    res.send(data);
  } catch (err) {
    console.error("OpenWeather error:", err);
    res.status(500).send({ error: "Failed to fetch current weather." });
  }
});

// ----------------------------
// Route: Weekly Forecast (WeatherAPI)
// ----------------------------
app.post('/forecast', async (req, res) => {
  const city = req.body.city;
  const apikey1 = process.env.WEATHERAPI_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apikey1}&q=${city}&days=7&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("✅ WeatherAPI success for:", city);
    res.send(data);
  } catch (err) {
    console.error("WeatherAPI error:", err);
    res.status(500).send({ error: "Failed to fetch forecast." });
  }
});

// ----------------------------
// Route: Daily Forecast (Weatherbit)
// ----------------------------
app.post('/dayforecast', async (req, res) => {
  const city = req.body.city;
  const apikey2 = process.env.WEATHERBIT_KEY;

  const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${apikey2}&city=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("✅ Weatherbit success for:", city);
    res.send(data);
  } catch (err) {
    console.error("Weatherbit error:", err);
    res.status(500).send({ error: "Failed to fetch daily forecast." });
  }
});

// ----------------------------
// Start the server
// ----------------------------
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
