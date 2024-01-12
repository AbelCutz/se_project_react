import React, { useContext } from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onLogOut, onClickEditprofile }) => {
  const { name, avatar } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        {avatar ? (
          <img src={avatar} alt="avart" className="sidebar__avatar" />
        ) : (
          <div className="sidebar__avatar">
            <p className="sidebar__place-holder">{name[0].toUpperCase()}</p>
          </div>
        )}
        <h1 className="sidebar__name">{name}</h1>
      </div>
      <button className="sidebar__btns" onClick={onClickEditprofile}>
        Change profile data
      </button>
      <button className="sidebar__btns" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
