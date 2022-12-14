import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "./redux/action/weatherAction";
import Notice from "./component/Notice";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [background, setBackgroud] = useState();
  const cities = ["New York", "Tokyo", "Rome", "Paris"];
  const { loading, currentOrSelect, setRenderCity } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const getCurrentCity = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      return dispatch(weatherAction.getCurrentCityWeather(lat, lon));
    });
  };
  const getSelectCity = (city) => {
    return dispatch(weatherAction.getSelectedCityWeather(city));
  };
  useEffect(() => {
    if (currentOrSelect) {
      getCurrentCity();
    } else {
      getSelectCity(city);
    }
  }, [city]);

  if (loading) {
    return (
      <div className="body">
        <div className="main">
          <div className="loading">
            <DotLoader color="#ffff" loading={loading} size={100} />
          </div>
          <WeatherButton cities={cities} />
        </div>
        <Notice />
      </div>
    );
  } else {
    return (
      <div className="body">
        <div
          className="main"
          style={{
            backgroundImage: `${background}`
          }}
        >
          <h4 className="title">Today's weather 🌎</h4>
          <WeatherBox
            setBackgroud={setBackgroud}
            renderWeather={setRenderCity}
          />
          <WeatherButton cities={cities} />
        </div>
        <Notice />
      </div>
    );
  }
};
export default Weather;
