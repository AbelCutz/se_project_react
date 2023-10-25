import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" className="sidebar__avatar" />
      <h1 className="sidebar__name">Terrence Tegegne</h1>
    </div>
  );
};

export default SideBar;
