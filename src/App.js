import React from "react";
import "./styles.css";
import WeatherForecast from "./WeatherForecast.js";
import WeatherData from "./WeatherData";

export default function App() {
    const allWeatherData = WeatherData.map((ele, index) => {
      return <WeatherForecast img={ele.img} conditions={ele.conditions} time={ele.time}/>
    })

    return (
      <div className="App">
        {allWeatherData}
      </div>
  );
}


