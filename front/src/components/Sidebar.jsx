import React from "react";

function Sidebar({ dayForecast }) {
  const datenow = new Date(); // Get the current date
  const currentd = datenow.getDate();
  const currentMonth = datenow.getMonth();
  const currentYear = datenow.getFullYear();

  let days = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date(currentYear, currentMonth, currentd + i);
    days.push(date.getDate());
  }

  return (
    <div className="sidebar">
      <h4>WEEKLY FORECAST</h4>
      <div className="week">
        <div className="week-unit">
          <p>Today</p>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${dayForecast?.data?.[0]?.weather?.icon}.png`}
            alt="Weather Icon"
          />
          <p className="condition">
            {(dayForecast?.data?.[0]?.weather?.description)}
          </p>
          <p>
            {dayForecast?.data?.[0]?.max_temp}°C / {dayForecast?.data?.[0]?.min_temp}°C
          </p>
        </div>
        <hr />
        {dayForecast?.data?.slice(1, 7).map((item, index) => (
          <div key={index}>
            <div className="week-unit">
              <p>{new Date(item.datetime).toLocaleDateString("en-US", { weekday: 'long' })}</p>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                alt="Weather Icon"
              />
              <p className="condition">{item.weather.description}</p>
              <p>
                {item.max_temp}°C / {item.min_temp}°C
              </p>
            </div>
            {index !== dayForecast.data.slice(1, 7).length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
