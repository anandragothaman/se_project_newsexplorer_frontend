import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function LoginModal({
  onClose,
  isOpen,
  onLoginModalSubmit,
  handleSignUpClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail === "") {
      setEmailError("Email cannot be empty.");
    } else if (!validateEmail(newEmail)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email, password });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 1;
  const isFormValid = isEmailValid && isPasswordValid;
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);
  return (
    <ModalWithForm
      buttonText="Sign in"
      isLoginVisible={true}
      isRegisterVisible={false}
      isRegisterSuccess={false}
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      handleSignUpClick={handleSignUpClick}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        {emailError && <p className="modal__error">{emailError}</p>}
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
    </ModalWithForm>
  );
}
