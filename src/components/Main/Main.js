import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/ItemCard.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredItems = clothingItems
    ? clothingItems.filter((item) => {
        return item.weather === weatherType;
      })
    : [];

  return (
    <main className="main">
      <WeatherCard day={true} type={"sunny"} weatherTemp={temp} />
      <section className="main__section">
        <div className="main__info">
          <div className="card__section">
            <p className="card__section-title">
              Today is {temp}° {currentTemperatureUnit} / You may want to wear:
            </p>
          </div>
        </div>
        <ul className="card__items">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
