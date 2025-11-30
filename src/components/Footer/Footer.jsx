import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p className="footer__author">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <ul className="footer__copyright">
        <li>
          <Link to="/" className="footer__nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tripleten" className="footer__nav-link">
            TripleTen
          </Link>
        </li>
        <li>
          <Link to="/" className="footer__nav-link">
            <img
              src="../../src/assets/github.svg"
              alt="github avatar"
              className="footer__avatar"
            />
          </Link>
        </li>
        <li>
          <Link to="/" className="footer__nav-link">
            <img
              src="../../src/assets/linkedin.svg"
              alt="linkedin avatar"
              className="footer__avatar"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
