import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
const Profile = ({ onSelectCard, clothingItems, onClickModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onClickModal={onClickModal}
      />
    </div>
  );
};
export default Profile;
