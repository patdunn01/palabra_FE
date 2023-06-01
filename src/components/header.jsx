import { ReactComponent as Palabra } from "../icons/Palabra_header.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div><Link to="/">
          <Palabra className="home_page_logo" />
        </Link></div>
      <div>{isMenuOpen && (
        <div className="burger-menu-background">
          <Link to="/about" className="menu-options">About</Link>
          <Link to="/contact" className="menu-options">Contact</Link>
          <Link to="/legal" className="menu-options">Legal</Link>
        </div>
      )}</div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      
    </div>
  );
}
