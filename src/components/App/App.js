import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../util/WeatherApi";
import "../ModalWithForm/ModalWithForm.css";
import "./App.css";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const weatherNumber = parseInt(temperature.temperature.f, 10);
        setTemp(weatherNumber.toString());
        const location = parseLocationData(data);
        setWeatherLocation(location);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        temperature={temperature}
        weatherLocation={weatherLocation}
      />
      <Main weatherTemp={temperature} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__input-group">
            <label htmlFor="name">Name</label>
            <input
              className="modal__input-name"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              minLength={1}
              maxLength={30}
            />
          </div>
          <div className="modal__input-group">
            <label htmlFor="link">Image</label>
            <input
              className="modal__input-link"
              type="url"
              placeholder="Image URL"
              name="link"
              id="link"
              minLength={1}
              maxLength={30}
            />
          </div>
          <div className="modal__input-group">
            <p>
              <b>Select the weather type:</b>
            </p>
            <div className="modal__radio-btns">
              <label>
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="hot"
                  value="hot"
                  name="weatherType"
                />
                Hot
              </label>
              <label>
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="warm"
                  value="warm"
                  name="weatherType"
                />
                Warm
              </label>
              <label>
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="cold"
                  value="cold"
                  name="weatherType"
                />
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
