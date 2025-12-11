import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation({
  handleLogInClick,
  isLogin,
  isRegister,
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
          <li>
            {!isLogin && isRegister && isSavedArticle && (
              <NavLink to="/saved-news" className="header__nav-link">
                Saved Articles
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
      {isLogin && !isRegister && (
        <button onClick={handleLogInClick} className="header__auth-button">
          Sign In
        </button>
      )}
      {isRegister && !isLogin && (
        <button onClick={handleLogOutClick} className="header__auth-button">
          Elise <span className="header__logout-button"></span>
        </button>
      )}
    </section>
  );
}
export default Navigation;
