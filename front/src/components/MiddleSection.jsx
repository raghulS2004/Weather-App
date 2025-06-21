import React from "react";

function MiddleSection({ forecastData }) {
  const currentTime = forecastData?.location?.localtime || "";
  let currentHour = 0;

  if (currentTime) {
    try {
      currentHour = parseInt(currentTime.split(" ")[1].split(":")[0], 10);
    } catch (err) {
      console.warn("Invalid time format:", currentTime);
      currentHour = 0;
    }
  }

  const totalhours = [];
  for (let i = currentHour; i < currentHour + 7; i++) {
    totalhours.push(i % 24);
  }

  const forecastHours = forecastData?.forecast?.forecastday?.[0]?.hour || [];

  return (
    <div className="middle-container">
      <h4>HOURLY FORECAST</h4><br />
      <div className="forecast">
        {totalhours.map((item, index) => {
          const hourData = forecastHours[item];

          if (!hourData) {
            return (
              <div key={index} className="forecast-item">
                <p>{item === 0 ? "12 AM" : item < 12 ? `${item} AM` : `${item % 12 || 12} PM`}</p>
                <p>Loading...</p>
              </div>
            );
          }

          const iconUrl = hourData?.condition?.icon?.startsWith("//")
            ? `https:${hourData.condition.icon}`
            : hourData.condition.icon;

          return (
            <div key={index} className="forecast-item">
              <p>{item === 0 ? "12 AM" : item < 12 ? `${item} AM` : `${item % 12 || 12} PM`}</p>
              <img src={iconUrl} alt="weather icon" />
              <p className="cvalue">
                {hourData?.temp_c !== undefined
                  ? `${Math.round(hourData.temp_c)}°`
                  : "--"}
              </p><br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiddleSection;
