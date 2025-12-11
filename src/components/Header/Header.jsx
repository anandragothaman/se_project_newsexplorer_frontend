import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
function Header({ isLogin, isRegister, handleLogInClick, handleLogOutClick }) {
  return (
    <>
      <section className="header__logo">
        <h1 className="header__title">
          <NavLink to="/" className="header__title-link">
            NewsExplorer
          </NavLink>
        </h1>
        <Navigation
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
