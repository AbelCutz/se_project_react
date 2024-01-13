import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onLogOut, handleEditprofile }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt="avart"
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar">
            <p className="sidebar__place-holder">
              {currentUser.name[0].toUpperCase()}
            </p>
          </div>
        )}
        <h1 className="sidebar__name">{currentUser.name}</h1>
      </div>
      <button className="sidebar__btns" onClick={handleEditprofile}>
        Change profile data
      </button>
      <button className="sidebar__btns" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
