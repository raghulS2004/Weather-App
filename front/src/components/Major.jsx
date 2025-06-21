import React from "react";
import MiddleSection from "./MiddleSection";
import LastSection from "./LastSection";
import Sidebar from "./Sidebar";
import './css/major.css';

function Major({ weatherData, forecastData }) {
  const iconCode = weatherData?.weather?.[0]?.icon;
  const picUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@4x.png` : "";

  return (
    <div>
      <div className="main-container">
        <div className="lft">
          <h1>{weatherData?.name || "City Name"}</h1>
          <p>{(weatherData.weather?.[0]?.description || "NA").toUpperCase()}</p>
          <p>{weatherData?.coord?.lon},{weatherData?.coord?.lat}</p>
          <h1 className="degree">{weatherData?.main?.temp !== undefined ? Math.round(weatherData.main.temp) : "N/A"}°</h1>
        </div>
        <div className="rgt">
          {picUrl ? (
            <img src={picUrl} alt="Weather Image" />
          ) : (
            <p>Loading icon...</p>
          )}
        </div>
      </div>
      <MiddleSection forecastData={forecastData} />
      <LastSection forecastData={forecastData} />
    </div>
  );
}

export default Major;
