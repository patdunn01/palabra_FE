import { ReactComponent as PalabraFooter } from "../icons/Palabra_footer.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="">
        <div className="footer-menu-list">
            <Link to="/about" className="footer-menu-options">
              <p>About</p>
            </Link>
            <Link to="/contact" className="footer-menu-options">
              <p>Contact</p>
            </Link>
            <Link to="/terms" className="footer-menu-options">
              <p>Terms</p>
            </Link>
            <Link to="/legal" className="footer-menu-options">
              <p>Legal</p>
            </Link>
            <Link to="/privacy" className="footer-menu-options">
              <p>Privacy</p>
            </Link>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      <div>
        <Link to="/">
        <PalabraFooter className="footer_logo" />
        </Link>
      </div>
    </div>
  );
}
