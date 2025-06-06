import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li>
          <a
            href="https://www.linkedin.com/in/sulemanbaloch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
         <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
