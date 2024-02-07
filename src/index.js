import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import WeatherProvider from "./Context/weatherprovider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WeatherProvider>
      <ChakraProvider initialColorMode={theme.config.initialColorMode}>
        <App />
      </ChakraProvider>
    </WeatherProvider>
  </BrowserRouter>
);
{
  /* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
