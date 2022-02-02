import { useState } from "react";
import "./navbar.css";
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-name">
        <span>Aakash Pawar⚡</span>
      </div>
      <div className={showNavLinks ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="menu-btn" onClick={() => setShowNavLinks(!showNavLinks)}>
        {showNavLinks ? (
          <HiOutlineX style={{ position: "fixed" }} />
        ) : (
          <HiOutlineMenuAlt1 />
        )}
      </div>
    </div>
  );
};

export default Navbar;
