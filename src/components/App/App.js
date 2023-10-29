import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/WeatherApi";
import "./App.css";
import {
  addNewClothes,
  deleteClothingItem,
  getClothingItems,
} from "../../utils/Api";

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [clothingItems, setClothingItems] = useState([]);
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

  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddItem = (item) => {
    addNewClothes(item)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(`addItem: ${err}`));
  };

  const handleDeleteItem = (selectedItem) => {
    deleteClothingItem(selectedItem._id)
      .then(() => {
        const updatedClothingItems = clothingItems.filter((item) => {
          return item._id !== selectedItem._id;
        });
        setClothingItems(updatedClothingItems);
        handleCloseModal();
      })
      .catch((err) => console.log(`deleteItem: ${err}`));
  };

  useEffect(() => {
    getClothingItems()
      .then((items) => setClothingItems(items))
      .catch((err) => console.error(`setClothingItems: ${err}`));
  }, []);
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const location = parseLocationData(data);
        setWeatherLocation(location);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          temperature={temperature}
          weatherLocation={weatherLocation}
        />

        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temperature}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onClickModal={handleCreateModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            isOpen={activeModal === "create"}
            onClose={handleCloseModal}
            onAddItem={handleAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleConfirmModal}
          />
        )}
        {activeModal === "confirm" && (
          <DeleteConfirmModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onSubmit={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
