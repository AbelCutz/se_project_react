import React, { useState, useEffect } from "react";
import "../ItemModal/ItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeatherType("");
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  function handleSubmit(e) {
    // prevent default behavior
    e.preventDefault();
    // call onAddItem with appropriate arguments
    onAddItem({
      name,
      imageUrl,
      weatherType,
    });
  }

  return (
    <ModalWithForm
      title="New Garment"
      name="add-garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-group">
        <label htmlFor="name">Name</label>
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
      </div>
      <div className="modal__input-group">
        <label>Image</label>
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
              checked={weatherType === "hot"}
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
              checked={weatherType === "warm"}
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
              checked={weatherType === "cold"}
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
