import "./ModalWithForm.css";
import close from "../../assets/close.svg";
function ModalWithForm({
  children,
  buttonText,
  isLoginVisible,
  isRegisterVisible,
  isRegisterSuccess,
  title,
  isOpen,
  onClose,
  onSubmit,
  handleLogInClick,
  handleSignUpClick,
  isFormValid,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close icon" className="modal__close-icon" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          {!isRegisterSuccess && (
            <div className="modal__line">
              <button
                type="submit"
                className="modal__submit"
                disabled={!isFormValid}
              >
                {buttonText}
              </button>{" "}
              {isLoginVisible && !isRegisterVisible && (
                <p className="modal__login">
                  or{" "}
                  <span
                    className="modal__login-text"
                    onClick={handleSignUpClick}
                  >
                    Sign up
                  </span>
                </p>
              )}
              {isRegisterVisible && !isLoginVisible && (
                <p className="modal__login">
                  or{" "}
                  <span
                    className="modal__login-text"
                    onClick={handleLogInClick}
                  >
                    Sign in
                  </span>
                </p>
              )}
            </div>
          )}
          {isRegisterSuccess && (
            <p className="modal__signin">
              <span className="modal__signin-text" onClick={handleLogInClick}>
                Sign in
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
