import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#insights">Projects</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#certifications">Certifications</a></li> */}
        <li><a href="#projects">Industry Insights</a></li>
        {/* <li><a href="#linkedin">Posts</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
