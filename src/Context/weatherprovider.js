import React, { Children, createContext, useContext, useState } from "react";

const WeatherContext = createContext();
const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [place, setPlace] = useState();
  return (
    <WeatherContext.Provider
      value={{ currentWeather, setCurrentWeather, setPlace, place }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export const WeatherState = () => {
  return useContext(WeatherContext);
};

export default WeatherProvider;
