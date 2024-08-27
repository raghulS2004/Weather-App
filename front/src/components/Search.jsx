import React, { useState } from "react";
import "./css/search.css";
import cityList from "./cityList";

function Search({ setWeatherData, setForecastData,setCity }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredCities([]);
      setIsOpen(true);
    } else {
      setFilteredCities(
        cityList.filter(city =>
          city.toLowerCase().includes(term)
        )
      );
      setIsOpen(true);
    }
  };

  const handleSubmit = (city) => {
    setCity(city);
    setIsOpen(false);
    setSearchTerm("")
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Cities ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {isOpen && filteredCities.length > 0 && (
          <ul>
            {filteredCities.map((city, index) => (
              <li key={index}>
                <button className="search-term" onClick={() => handleSubmit(city)}>{city}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
