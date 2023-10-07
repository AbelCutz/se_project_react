import "./WeatherCard.css";
import "../App/App";
import { weatherCondition } from "../../util/Contants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("Weather card");
  const weatherConditions = weatherCondition.find((i) => {
    return i.day === day && i.type === type;
  });
  const weatherConditionURL = weatherConditions ? weatherConditions.url : "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp} °F </div>
      <img
        src={weatherConditionURL}
        className="weather__image"
        alt="weather condition"
      />
    </section>
  );
};

export default WeatherCard;
