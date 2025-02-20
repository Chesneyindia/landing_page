import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css"; // Import the CSS file
import logo from "../assets/logo.png"; 
import logo2 from "../assets/whitelogo.png";
import { useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo on the Left */}
      <div className="logo">
        <img src={logo2} alt="YourLogo" className="imaged" style={{ height: "60px", width: "auto", cursor: "pointer", transition: "transform 0.3s ease" }} />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Centered Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/work" onClick={toggleMenu}>Work</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>

      {/* CMS Button on the Right */}
      <button className="cms-button">CMS</button>
    </nav>
  );
};

export default Navbar;
