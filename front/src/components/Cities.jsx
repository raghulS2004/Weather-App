import React, { useState } from "react";
import './css/citylist.css';
import { useNavigate } from "react-router-dom";
import cityList from "./cityList.js";

function Cities({setCity}) {

  const navigate=useNavigate();
  function handleCityClick(city) {
    setCity(city);
    navigate("/")
  }

  return (
    <div className="city-list-container">
      <h1>City List</h1>
      <ul>
        {cityList.map((city, index) => (
          <li
            key={index}
            data-city={city}
            onClick={() => handleCityClick(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;
