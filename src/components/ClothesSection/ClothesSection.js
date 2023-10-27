import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ onSelectedCard, clothingItems, onClickModal }) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <h2 className="clothes-section__header"> Your items</h2>
        <button onClick={onClickModal} className="clothes-section__addButton">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectedCard={onSelectedCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
