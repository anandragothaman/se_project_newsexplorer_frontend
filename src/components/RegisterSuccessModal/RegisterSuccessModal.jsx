import "./RegisterSuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  onClose,
  isOpen,
  onRegisterModalSubmit,
  handleLogInClick,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ email, password, name });
  };
  return (
    <ModalWithForm
      buttonText=""
      isLogin={false}
      isRegister={true}
      isRegisterSuccess={true}
      title=""
      isOpen={isOpen}
      onClose={onClose}
      handleLogInClick={handleLogInClick}
      onSubmit={handleSubmit}
    >
      <p className="modal__sucess">Registration successfully completed!</p>
    </ModalWithForm>
  );
}
