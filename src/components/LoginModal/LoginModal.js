import React, { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onClose,
  onSubmit,
  onAltOptionBtn,
  isLoading,
}) => {
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
      buttonText={isLoading ? "Logging in..." : "Log in"}
      onSubmit={handleSubmit}
      altOptionBtn=" or Register"
      onAltOptionBtn={onAltOptionBtn}
    >
      <div className="modal__input-group">
        <label className="name">
          Email
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
        <label className="name">
          Password
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
    </ModalWithForm>
  );
};

export default LoginModal;
