import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
const ClothesSection = ({
  onSelectCard,
  clothingItems,
  onClickModal,
  onCardLike,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const filterItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h2 className="clothes-section__header"> Your items</h2>
        <button onClick={onClickModal} className="clothes-section__addButton">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {filterItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectCard={onSelectCard}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
