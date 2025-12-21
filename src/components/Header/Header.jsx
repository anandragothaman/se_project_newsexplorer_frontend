import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
function Header({
  userName,
  isLoginVisible,
  isMobileLoginVisible,
  handleLogInClick,
  handleLogOutClick,
  isSavedArticle,
  handleMobileLoginClick,
}) {
  return (
    <section className="header__logo">
      <h1 className="header__title">
        <NavLink to="/" className="header__title-link">
          NewsExplorer
        </NavLink>
      </h1>
      <Navigation
        isSavedArticle={isSavedArticle}
        userName={userName}
        isLoginVisible={isLoginVisible}
        isMobileLoginVisible={isMobileLoginVisible}
        handleLogOutClick={handleLogOutClick}
        handleLogInClick={handleLogInClick}
        handleMobileLoginClick={handleMobileLoginClick}
      />
    </section>
  );
}
export default Header;
