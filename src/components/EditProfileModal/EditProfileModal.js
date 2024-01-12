import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({ isOpen, onClose, onSubmit, currentUser }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };
  return (
    <ModalWithForm
      title="Change profile data"
      name="change-profile-data"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-group">
        <label className="name">Name*</label>
        <input
          className="modal__input-name"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="modal__input-group">
        <label>Avatar*</label>
        <input
          className="modal__input-name"
          type="url"
          id="avatar"
          value={avatar}
          onChange={handleAvatarChange}
          placeholder="Avatar URL"
          required
        />
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
