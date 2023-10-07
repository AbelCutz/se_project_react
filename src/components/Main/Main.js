import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/ItemCard.css";
import { weatherCondition, day } from "../../util/Contants";
import { defaultClothingItems } from "../../util/ClothingItems";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const weatherCardImage = weatherCondition.find(
    (option) => option.type == weatherType && option.day === day
  )?.link;

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={day} type="cloudy" weatherTemp={weatherTemp} />
      <section className="main__section">
        <div className="main__info">
          <div className="card__section">
            <p className="card__section-title">
              Today is {weatherTemp} °F / you may want to wear:
            </p>
          </div>
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              card={filteredCards}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
