import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { signin, checkToken, signUp } from "../../utils/Auth";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/WeatherApi";
import "./App.css";
import {
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
  addLikeItem,
  removeLikedItem,
  updateUserProfile,
} from "../../utils/Api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [namePlaceHolder, setNamePlaceHolder] = useState("");
  const history = useHistory();
  // --------------------------- modals ------------------------------------------------------------
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
  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  // --------------------------- toggle ------------------------------------------------------------
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // --------------------------- handle add and delete --------------------------------------------------
  const handleAddItem = (item) => {
    addNewClothes(item)
      .then((addedItem) => {
        setClothingItems([addedItem.data, ...clothingItems]);
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => console.log(`addItem: ${err}`));
  };
  const handleDeleteItem = (selectedItem) => {
    deleteClothingItem(selectedItem._id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((c) => selectedItem._id !== c._id)
        );
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => console.log(`deleteItem: ${err}`));
  };

  const handleSignUp = ({ email, password, name, avatar }) => {
    signUp({ email, password, name, avatar })
      .then(() => {
        handleLogin({ email, password });
        history.push("/");
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const handleSubmitEditProfile = ({ name, avatar }) => {
    updateUserProfile({ name, avatar })
      .then((updated) => {
        setCurrentUser(updated);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };
  // --------------------------- Login and logout  ----------------------------------------------------
  const handleLogin = ({ email, password }) => {
    signin({ email, password }).then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        checkToken(res.token)
          .then((user) => {
            setCurrentUser(user);
            if (!user.avatar) {
              setNamePlaceHolder(Array.from(res.name)[0]);
            }
            history.push("/profile");
            handleCloseModal();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    history.push("/");
  };

  // --------------------------- add and remove likes ----------------------------------------------------
  const handleLikeItems = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addLikeItem(_id, isLiked, token)
          .then((updatedItems) => {
            console.log(updatedItems);
            setClothingItems((items) => {
              return items.map((c) => (c._id === _id ? updatedItems.data : c));
            });
          })
          .catch(console.error)
      : removeLikedItem(_id, token).then((updatedItems) => {
          setClothingItems((items) => {
            return items.map((c) => (c._id === _id ? updatedItems.data : c));
          });
        });
  };

  // --------------------------- useEffect ------------------------------------------------------------
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
          if (!res.avatar) {
            setNamePlaceHolder(Array.from(res.name)[0]);
          }
        })
        .then(() => {
          history.push("/");
        })
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    getClothingItems()
      .then(({ items }) => setClothingItems(items))
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
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temperature={temperature}
            weatherLocation={weatherLocation}
            isLoggedIn={isLoggedIn}
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
          />

          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temperature}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleLikeItems}
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onClickModal={handleCreateModal}
                onHandleEditProfileModal={handleEditProfileModal}
                onCardLike={handleLikeItems}
                onLogOut={handleLogout}
                isLoggedIn={isLoggedIn}
              />
            </ProtectedRoute>
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
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onSubmit={handleSignUp}
              onAltaOptionBtn={handleLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              onSubmit={handleLogin}
              onAltaOptionBtn={handleRegisterModal}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              onClose={handleCloseModal}
              onSubmit={handleSubmitEditProfile}
              currentUser={currentUser}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
