import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";

const Nav = () => {
  const [status, setStatus] = useState("close");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <a href="#Main" alt="Hello">
        <img
          src={logo}
          alt="Home"
          width="50px"
          data-menuanchor="main"
          className="logo"
        />
      </a>

      {(toggleMenu || screenWidth > 600) && (
        <ul>
          <li data-menuanchor="about">
            <a href="#About" alt="About">
              About
            </a>
          </li>
          <li data-menuanchor="portfolio">
            <a href="#Portfolio" alt="Portfolio">
              Portfolio
            </a>
          </li>
          <li data-menuanchor="contact">
            <a href="#Contact" alt="Contact">
              Contact
            </a>
          </li>
        </ul>
      )}

      <div className="navbtn" onClick={toggleNav} role="button">
        <div
          className="burger"
          onClick={() => setStatus(status === "open" ? "close" : "open")}
        >
          <i className={status}></i>
          <i className={status}></i>
          <i className={status}></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
