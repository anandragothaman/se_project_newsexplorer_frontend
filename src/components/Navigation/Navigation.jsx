import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation({
  handleLogInClick,
  userName,
  isLoginVisible,
  isRegisterVisible,
  isSavedArticle,
  handleLogOutClick,
}) {
  return (
    <section className="header__nav-auth">
      <nav>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/" className="header__nav-link">
              Home
            </NavLink>
          </li>
          {!isLoginVisible && isSavedArticle && (
            <li>
              <NavLink to="/saved-news" className="header__nav-link">
                Saved Articles
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {isLoginVisible && (
        <button onClick={handleLogInClick} className="header__auth-button">
          Sign In
        </button>
      )}
      {!isLoginVisible && (
        <button onClick={handleLogOutClick} className="header__auth-button">
          {userName} <span className="header__logout-button"></span>
        </button>
      )}
    </section>
  );
}
export default Navigation;
