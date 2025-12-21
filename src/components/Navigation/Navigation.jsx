import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation({
  handleLogInClick,
  userName,
  isLoginVisible,
  isMobileLoginVisible,
  isSavedArticle,
  handleLogOutClick,
  handleMobileLoginClick,
}) {
  return (
    <>
      <section className="header__nav">
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
      <section className="header__nav-mobile">
        <button
          className="header__nav-mobile-menu"
          onClick={handleMobileLoginClick}
        ></button>
        {isMobileLoginVisible && (
          <nav className="header__nav-mobile-links">
            <ul className="header__nav-mobile-list">
              <li>
                <NavLink
                  to="/"
                  className="header__nav-link"
                  onClick={handleMobileLoginClick}
                >
                  Home
                </NavLink>
              </li>
              {!isLoginVisible && isSavedArticle && (
                <li>
                  <NavLink
                    to="/saved-news"
                    className="header__nav-link"
                    onClick={handleMobileLoginClick}
                  >
                    Saved Articles
                  </NavLink>
                </li>
              )}
              {isLoginVisible && (
                <li>
                  <button
                    onClick={handleLogInClick}
                    className="header__auth-button"
                  >
                    Sign In
                  </button>
                </li>
              )}
              {!isLoginVisible && (
                <li>
                  <button
                    onClick={handleLogOutClick}
                    className="header__auth-button"
                  >
                    {userName} <span className="header__logout-button"></span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </section>
    </>
  );
}
export default Navigation;
