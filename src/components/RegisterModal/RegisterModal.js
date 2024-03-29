import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  onClose,
  onSubmit,
  onAltOptionBtn,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="sign-up"
      buttonText={isLoading ? "Submit..." : "Next"}
      isOpen={isOpen}
      onClose={onClose}
      altOptionBtn=" or Log in"
      onAltOptionBtn={onAltOptionBtn}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-group">
        <label>
          Email*
          <input
            className="modal__input-name"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
        </label>
      </div>
      <div className="modal__input-group">
        <label>
          Password*
          <input
            className="modal__input-name"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </label>
      </div>
      <div className="modal__input-group">
        <label>
          Name*
          <input
            className="modal__input-name"
            type="txt"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div className="modal__input-group">
        <label>
          Avatar URL*
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
export default RegisterModal;
