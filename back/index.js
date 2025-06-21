const express=require('express')
const router=express();
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); 
router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
router.post('/', async (req, res) => {
    const apiKey = "a4883c990c6327b02edd2edb3a12a544";
    const city = req.query.city;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Weather API success")
    res.send(data);
});

router.post('/forecast', async (req,res)=>{
    const apikey1="d7721ac41b854df2a3c151524252106"; 
    const city=req.query.city;
    console.log(city);
    const url="http://api.weatherapi.com/v1/forecast.json?key=755b0c53c74449b5a0c82746242608&aqi=yes&days=7&q="+city;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Forecast API success")
    res.send(data)
});
router.post('/dayforecast', async (req,res)=>{
    const apikey2="b8260559b7a946fd96edc80e9d0651bc"; 
    const city=req.query.city;
    console.log(city);
    const url="https://api.weatherbit.io/v2.0/forecast/daily?key=c3d594028bf14690befeefa4b91972cf&city="+city;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Forecast API success")
    res.send(data)
});
router.listen(8000,(req,res)=>{
    console.log("Server is live at 8000");
    
})