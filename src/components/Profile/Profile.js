import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
const Profile = ({ onSelectedCard, clothingItems, onClickModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectedCard={onSelectedCard}
        clothingItems={clothingItems}
        onClickModal={onClickModal} // on click modal
      />
    </div>
  );
};

export default Profile;
