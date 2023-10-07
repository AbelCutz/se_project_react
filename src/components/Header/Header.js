import "./Header.css";
import "./Navigation.css";
import avatar from "../../images/avatar.svg";
import Wtwrlogo from "../../images/Wtwrlogo.svg";

const Header = ({ temperature, weatherLocation, onCreateModal }) => {
  if (!temperature) return null;
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  const username = "Terrence Tegegne";
  const isAvatarSet = Boolean(avatar);

  return (
    <header className="header">
      <div className="header__content">
        <img src={Wtwrlogo} alt="header logo" className="header__logo" />
        <p className="header__date">
          {currentDate}, {weatherLocation}
        </p>
      </div>
      <div className="header__navigation">
        <nav className="navigation">
          <ul className="navigation__content">
            <li>
              <button className="navigation__button" onClick={onCreateModal}>
                + Add Clothes
              </button>
            </li>
            <li>
              <div className="navigation__link">
                {username}
                {avatar ? (
                  <span
                    className={`navigation__user${
                      isAvatarSet ? "navigation__user_avatar" : ""
                    }`}
                  >
                    <img
                      className="navigation__user"
                      src={avatar}
                      alt="user avatar"
                    ></img>
                  </span>
                ) : (
                  <span className="navigation__user navigation__user_type_none">
                    {username?.toUpperCase().charAt(0) || ""}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
