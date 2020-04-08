import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCard } from "../weather/WeatherCard";

export const WeatherConntainer = () => {
  const cityIds = "3060972,3343954,865084";
  const [data, setData] = useState({ weather: [] });

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=3060972,3343954,865084&appid=4aa070bb9544a4c727ca4a2f235779d5
        `
      )
      .then(response => {
        const data = response.data;
        console.log(data);
        setData({ weather: data });
      });
  }, []);
  return <div className="weather-container"></div>;
};
