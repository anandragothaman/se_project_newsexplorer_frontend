import { NavLink } from "react-router-dom";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <h1 className="header__title">
          <NavLink to="/" className="header__title-link">
            NewsExplorer
          </NavLink>
        </h1>
        <Navigation />
      </section>
      <section className="header__underline">
        <SearchForm />
      </section>
    </header>
  );
}
export default Header;
