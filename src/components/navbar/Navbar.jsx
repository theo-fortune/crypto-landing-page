import { React, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Menu from "./Menu";
import { Logo } from "../index";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar__logo" />
      <div className="navbar__links">
        <Menu />
      </div>
      <div className="navbar__button">
        <button>Download</button>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#F05830"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#236E57"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__button-menu_container scale-up-center">
            <div className="navbar__links_menu">
              <a href="#About">About us</a>
              <a href="#Features">Features</a>
              <a href="How">How it works</a>
              <a href="#Support">Support</a>
            </div>
            <div className="navbar__menu-button">
              <button>Download</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
