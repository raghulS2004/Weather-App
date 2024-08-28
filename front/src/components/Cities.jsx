import React, { useState } from "react";
import './css/citylist.css';
import { useNavigate } from "react-router-dom";
import cityList from "./cityList.js";

function Cities({setCity}) {
  const [searchquery,setSearchQuery]=useState('');
  const [filteredCities,setFilteredCities]=useState(cityList)
  const navigate=useNavigate();
  function handleSearch(event){
    const term=event.target.value;
    setSearchQuery(term);
    if (term === '') {
      setFilteredCities(cityList);
    } else {
      setFilteredCities(
        cityList.filter(city =>
          city.toLowerCase().includes(term)
        )
      );
  }
}
  function handleCityClick(city) {
    setCity(city);
    navigate("/")
  }

  return (
    <div className="city-list-container">
      <h1>City List</h1>
      <input
      className="search-city" type="text"
      placeholder="Search for cities"
      value={searchquery}
      onChange={handleSearch} />
      {filteredCities.length>0 &&(
      <ul>
        {filteredCities.map((city, index) => (
          <li
            key={index}
            data-city={city}
            onClick={() => handleCityClick(city)}
          >
            {city}
          </li>
        ))}
      </ul>)}
    </div>
  );
}

export default Cities;
