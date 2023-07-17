import { ReactComponent as PalabraFooter } from "../icons/Palabra_footer.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <ul className="footer-menu-list">
          <li>
            <Link to="/about" className="footer-menu-options">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-menu-options">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/terms" className="footer-menu-options">
              Terms
            </Link>
          </li>
          <li>
            <Link to="/legal" className="footer-menu-options">
              Legal
            </Link>
          </li>
        </ul>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      <div>
        <PalabraFooter className="footer_logo" />
      </div>
    </div>
  );
}
