Here's a complete `README.md` file you can use for your MERN Weather App, including deployment links, setup instructions, API usage, and environment configuration:

---

```markdown
# 🌦️ MERN Weather App

A full-stack weather forecast application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that displays current weather, hourly, and weekly forecasts using data from OpenWeather, WeatherAPI, and Weatherbit.

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://weather-app-alpha-five-11.vercel.app](https://weather-app-alpha-five-11.vercel.app)
- **Backend (Render)**: [https://weather-app-0a68.onrender.com](https://weather-app-0a68.onrender.com)

---

## ✨ Features

- 🌡️ Current weather by city
- 🕑 Hourly forecast (next 7 hours)
- 📅 7-day weather forecast
- 🔍 Search by city
- ⚡ Clean responsive UI
- 🔄 Real-time API fetch from three weather providers

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- React Router

### Backend:
- Node.js
- Express.js
- node-fetch
- dotenv
- CORS

---

## 📁 Project Structure

```

weather-app/
│
├── back/                 # Backend server
│   ├── index.js
│   └── .env
│
├── front/                # React frontend
│   ├── src/
│   ├── public/
│   ├── .env
│   └── App.jsx

````

---

## 🔐 Environment Variables

### Backend (`back/.env`)
```env
OPENWEATHER_API_KEY=your_openweather_api_key
WEATHERAPI_KEY=your_weatherapi_key
WEATHERBIT_KEY=your_weatherbit_key
````

### Frontend (`front/.env`)

```env
REACT_APP_API_URL=https://weather-app-0a68.onrender.com
```

---

## 📦 Installation & Development

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Weather-App.git
cd Weather-App
```

### 2. Backend Setup

```bash
cd back
npm install
```

Create a `.env` file in `/back` and add your API keys.

Start the backend:

```bash
node index.js
# or
npm run dev
```

### 3. Frontend Setup

```bash
cd ../front
npm install
```

Create a `.env` file in `/front`:

```env
REACT_APP_API_URL=http://localhost:8000
```

Start the React app:

```bash
npm start
```

---

## 🌍 API Endpoints (Backend)

| Endpoint       | Method | Description                      |
| -------------- | ------ | -------------------------------- |
| `/`            | POST   | Current weather from OpenWeather |
| `/forecast`    | POST   | 7-day forecast from WeatherAPI   |
| `/dayforecast` | POST   | Daily forecast from Weatherbit   |

**All endpoints expect a body like:**

```json
{
  "city": "Chennai"
}
```

---

## 🧾 License

MIT License. Feel free to use and improve this project!

---

## 🙌 Acknowledgments

* [OpenWeather](https://openweathermap.org/)
* [WeatherAPI](https://www.weatherapi.com/)
* [Weatherbit](https://www.weatherbit.io/)
* [Render](https://render.com/)
* [Vercel](https://vercel.com/)

```

