import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p className="footer__author">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__menu">
        <ul className="footer__copyright">
          <li>
            <Link to="/" className="footer__nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="https://tripleten.com/"
              target="_blank"
              className="footer__nav-link"
            >
              TripleTen
            </Link>
          </li>
        </ul>
        <ul className="footer__social-media">
          <li>
            <Link
              to="https://github.com/anandragothaman"
              target="_blank"
              className="footer__nav-link"
            >
              <img
                src="../../src/assets/github.svg"
                alt="github avatar"
                className="footer__avatar"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/anandragothaman/"
              target="_blank"
              className="footer__nav-link"
            >
              <img
                src="../../src/assets/linkedin.svg"
                alt="linkedin avatar"
                className="footer__avatar"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
