import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation({ handleLogInClick, isLogin, isRegister = "true" }) {
  return (
    <section className="header__nav-auth">
      <nav>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/" className="header__nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-news" className="header__nav-link">
              Saved Articles
            </NavLink>
          </li>
        </ul>
      </nav>
      {isLogin && !isRegister && (
        <button onClick={handleLogInClick} className="header__auth-button">
          Sign In
        </button>
      )}
      {isRegister && !isLogin && (
        <button onClick={handleLogInClick} className="header__auth-button">
          Elise{" "}
          <img
            src="../../src/assets/logout.svg"
            alt="arrow right"
            className="header__logout-button"
          />
        </button>
      )}
    </section>
  );
}
export default Navigation;
