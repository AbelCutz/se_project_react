import "./Header.css";
import "./Navigation.css";
// import avatar from "../../images/avatar.svg";
import Wtwrlogo from "../../images/Wtwrlogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  temperature,
  weatherLocation,
  onCreateModal,
  onRegisterModal,
  onLoginModal,
  isloggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser?.username;
  const avatar = currentUser?.avatar;
  if (!temperature) return null;
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={Wtwrlogo} alt="header logo" className="header__logo" />
        </Link>
        <p className="header__date">
          {currentDate}, {weatherLocation}
        </p>
      </div>
      <div className="header__navigation">
        <nav className="navigation">
          <ul className="navigation__content">
            <ToggleSwitch />
            {isloggedIn ? (
              <>
                <button className="navigation__button" onClick={onCreateModal}>
                  + Add Clothes
                </button>
                <Link to="/profile" className="navigation__link">
                  {username}
                </Link>
                {avatar ? (
                  <img
                    className="navigation__user_avatar"
                    src={avatar}
                    alt="user avatar"
                  />
                ) : (
                  <lil className="navigation__avatar">
                    <p className="navigation__place-holder">
                      {username[0].toUpperCase()}
                    </p>
                  </lil>
                )}
              </>
            ) : (
              <>
                <button
                  className="navigation__button"
                  onClick={onRegisterModal}
                >
                  Sign Up
                </button>
                <button className="navigation__button" onClick={onLoginModal}>
                  Log In
                </button>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
