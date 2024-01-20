import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onLogOut, onHandleEditProfileModal }) => {
  const currentUser = useContext(CurrentUserContext) || {};
  const { avatar, name } = currentUser;
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img src={avatar} alt="avatar" className="sidebar__avatar" />
        <h1 className="sidebar__name">{name}</h1>
      </div>
      <button className="sidebar__btns" onClick={onHandleEditProfileModal}>
        Change profile data
      </button>
      <button className="sidebar__btns" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
