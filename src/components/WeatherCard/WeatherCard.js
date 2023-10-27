import "./WeatherCard.css";
import "../App/App";
import { weatherCondition } from "../../utils/Contants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherConditions = weatherCondition.find((i) => {
    return i.day === day && i.type === type;
  });
  console.log(weatherCondition);
  const weatherConditionURL = weatherConditions ? weatherConditions.url : "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>
      <img src={weatherConditionURL} alt={type} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
