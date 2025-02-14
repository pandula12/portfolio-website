import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">PG</div>
        <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#education" onClick={handleNavClick}>Education</a>
          <a href="#work" onClick={handleNavClick}>Work Experience</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
