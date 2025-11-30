import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation() {
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
      <button className="header__auth-button">Sign In</button>
    </section>
  );
}
export default Navigation;
