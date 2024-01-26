import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import "../ModalWithForm/ModalWithForm.css";
const EditProfileModal = ({
  isOpen,
  onClose,
  onSubmit,
  currentUser,
  isLoading,
}) => {
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
      buttonText={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-group">
        <label className="name">
          Name*
          <input
            className="modal__input-name"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div className="modal__input-group">
        <label className="avatar">
          Avatar
          <input
            className="modal__input-name"
            type="url"
            id="avatar"
            value={avatar}
            onChange={handleAvatarChange}
            placeholder="Avatar URL"
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
