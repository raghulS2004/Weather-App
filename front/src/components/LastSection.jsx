import React from "react";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { GiHeavyRain } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { GiPoisonGas } from "react-icons/gi";
import { WiSmoke } from "react-icons/wi";
import { GiGasStove } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
function LastSection({ forecastData }) {
    return (
        <div className="last-container">
            <h4 className="heading">AIR CONDITIONS</h4>
            <div className="wind">
                <div className="wind-item">
                    <div className="icon"><WiStrongWind /></div>
                    <div className="icon-content">
                        <p>WIND</p>
                        <p>{forecastData?.current?.wind_kph} KM/H</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><WiHumidity /></div>
                    <div className="icon-content">
                        <p>HUMIDITY</p>
                        <p>{forecastData?.current?.humidity}</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><GiHeavyRain fontSize={"1.5rem"} /></div>
                    <div className="icon-content">
                        <p>RAIN</p>
                        <p>{forecastData?.current?.precip_mm} mm</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><FaSun fontSize={"1.5rem"} /></div>
                    <div className="icon-content">
                        <p>UV INDEX</p>
                        <p>{forecastData?.current?.uv}</p>
                    </div>
                </div>
            </div>
            <hr />
            <h4>AIR QUALITY</h4>
            <div className="wind">
                <div className="wind-item">
                    <div className="icon"><GiPoisonGas fontSize={"1.8rem"} /></div>
                    <div className="icon-content">
                        <p>CO</p>
                        <p>{forecastData?.current?.air_quality?.co}</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><GiGasStove fontSize={"1.8rem"} /></div>
                    <div className="icon-content">
                        <p>SO2</p>
                        <p>{forecastData?.current?.air_quality?.so2}</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><WiSmoke fontSize={"2.5rem"} /></div>
                    <div className="icon-content">
                        <p>NO2 </p>
                        <p>{forecastData?.current?.air_quality?.no2}</p>
                    </div>
                </div>
                <div className="wind-item">
                    <div className="icon"><FaBars fontSize={"1.2rem"} /></div>
                    <div className="icon-content">
                        <p>US-EPA INDEX</p>
                        <p>{forecastData?.current?.air_quality?.['us-epa-index']}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastSection;