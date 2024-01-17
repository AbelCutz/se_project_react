import React, { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSubmit, onAltaOptionBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title="Log in"
      name="Log-in"
      onClose={onClose}
      isOpen={isOpen}
      buttonText="Log in"
      onSubmit={handleSubmit}
      altOptionBtn=" or Register"
      onAltaOptionBt={onAltaOptionBtn}
    >
      <div className="modal__input-group">
        <label className="name">Email</label>
        <input
          className="modal__input-name"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="modal__input-group">
        <label className="name">Password</label>
        <input
          className="modal__input-name"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
