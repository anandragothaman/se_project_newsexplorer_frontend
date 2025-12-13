import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
function Header({
  userName,
  isLogin,
  isRegister,
  handleLogInClick,
  handleLogOutClick,
  isSavedArticle,
}) {
  return (
    <>
      <section className="header__logo">
        <h1 className="header__title">
          <NavLink to="/" className="header__title-link">
            NewsExplorer
          </NavLink>
        </h1>
        <Navigation
          isSavedArticle={isSavedArticle}
          userName={userName}
          isLogin={isLogin}
          isRegister={isRegister}
          handleLogOutClick={handleLogOutClick}
          handleLogInClick={handleLogInClick}
        />
      </section>
    </>
  );
}
export default Header;
