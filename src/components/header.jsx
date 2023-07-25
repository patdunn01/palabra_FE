import { ReactComponent as Palabra } from "../icons/Palabra_header.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the Home component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div>
        <Link to="/">
          <Palabra className="home_page_logo" />
        </Link>
      </div>
      <div></div>
      <div className="burger-menu-container">
        <div
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        {isMenuOpen && (
          <div className="burger-menu-background">
            <Link to="/about" className="menu-options">
              About
            </Link>
            <Link to="/french" className="menu-options">
              French
            </Link>
            <Link to="/spanish" className="menu-options">
              Spanish
            </Link>
            <Link to="/terms" className="menu-options">
              Terms
            </Link>
            <Link to="/privacy" className="menu-options">
              Privacy
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
