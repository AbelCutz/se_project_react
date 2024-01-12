import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
const Profile = ({
  onSelectCard,
  clothingItems,
  onClickModal,
  onLogOut,
  onClickEditProfile,
  isLoggedIn,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar onClickEditprofile={onClickEditProfile} onLogOut={onLogOut} />
      <ClothesSection
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onClickModal={onClickModal}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};
export default Profile;
