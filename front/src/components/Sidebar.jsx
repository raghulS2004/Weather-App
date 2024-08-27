import React from "react";

function Sidebar({forecastData}){
    const datenow = forecastData?.location?.localtime_epoch * 1000; // Assuming localtime_epoch is in seconds
    const today = new Date(datenow);
    let currentd = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    
    let days=[]
    for (let i = 0; i < 7; i++) {
        let date = new Date(currentYear, currentMonth, currentd + i);
        days.push(date.getDate())
    }
    
    // console.log(arr);
    const arr=[1,2,3,4,5,6]
    return(
        <div className="sidebar">
            <h4>WEEKLY FORECAST</h4>
            <div className="week">
                <div className="week-unit">
                    <p>Today</p>
                    <img src={forecastData?.forecast?.forecastday[0]?.day?.condition?.icon} alt="" />
                    <p className="condition">{(forecastData?.forecast?.forecastday[0]?.day.condition.text)}</p>
                    <p>{JSON.stringify(forecastData?.forecast?.forecastday[0]?.day?.maxtemp_c)} / {JSON.stringify(forecastData?.forecast?.forecastday[0]?.day?.mintemp_c)}</p>
                </div>
                <hr />
                {arr.map((item,index)=>{
                    return(
                        <div key={index}>
                        <div className="week-unit">
                        <p>{days[item]}</p>
                        <img src={forecastData?.forecast?.forecastday[item]?.day?.condition?.icon} alt="" />
                        <p className="condition">{(forecastData?.forecast?.forecastday[item]?.day.condition.text)}</p>
                        <p>{JSON.stringify(forecastData?.forecast?.forecastday[item]?.day?.maxtemp_c)} / {JSON.stringify(forecastData?.forecast?.forecastday[0]?.day?.mintemp_c)}</p>
                    </div>
                    {index !== arr.length - 1 && <hr />}
                    </div>
                    )
                })}
            </div>
       </div>
    )
}
export default Sidebar;