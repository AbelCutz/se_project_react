import React, { useState, useEffect } from "react";
import "../ItemModal/ItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose, isLoading }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    // prevent default behavior
    e.preventDefault();
    // call onAddItem with appropriate arguments
    onAddItem({
      name,
      imageUrl,
      weather,
    });
  }
  return (
    <ModalWithForm
      title="New Garment"
      name="add-garment"
      buttonText={isLoading ? "Saving..." : "Add garment"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-group">
        <label htmlFor="name">
          Name
          <input
            className="modal__input-name"
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            minLength={1}
            maxLength={300}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div className="modal__input-group">
        <label>
          Image
          <input
            className="modal__input-link"
            type="url"
            placeholder="Image URL"
            name="link"
            id="imageUrl"
            value={imageUrl}
            minLength={1}
            maxLength={300}
            onChange={handleLinkChange}
          />
        </label>
      </div>
      <div className="modal__input-group">
        <p>
          <b>Select the weather type:</b>
        </p>
        <div className="modal__radio-btns">
          <label>
            <input
              className="modal__input-radio"
              type="radio"
              id="hot"
              value="hot"
              name="weatherType"
              checked={weather === "hot"}
              onChange={handleWeatherTypeChange}
            />
            Hot
          </label>
          <label>
            <input
              className="modal__input-radio"
              type="radio"
              id="warm"
              value="warm"
              name="weatherType"
              checked={weather === "warm"}
              onChange={handleWeatherTypeChange}
            />
            Warm
          </label>
          <label>
            <input
              className="modal__input-radio"
              type="radio"
              id="cold"
              value="cold"
              name="weatherType"
              checked={weather === "cold"}
              onChange={handleWeatherTypeChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
