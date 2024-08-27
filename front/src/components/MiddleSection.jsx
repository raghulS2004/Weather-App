import React from "react";

function MiddleSection({ forecastData }) {
    const currentTime = forecastData?.location?.localtime;
    let currentHour = parseInt(currentTime?.split(' ')[1].split(':')[0], 10);
    console.log(currentHour);
    const totalhours = [];
    for (let i = currentHour; i < currentHour + 7; i++) {
        totalhours.push(i % 24);
    }


    return (
        <div className="middle-container">
            <h4>HOURLY FORECAST</h4><br />
            <div className="forecast">
                {totalhours.map((item,index) => {
                    return (
                        <div key={index}>
                        <div className="forecast-item">
                            <p>{item === 0 ? "12 AM" : item < 12 ? item % 12 + " AM" : item % 12 + " PM"}</p>
                            <img src={forecastData?.forecast?.forecastday[0].hour[item]?.condition.icon} alt="" />
                            <p className="cvalue">{Math.round(forecastData?.forecast?.forecastday[0].hour[item]?.temp_c)}°</p><br />
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MiddleSection;