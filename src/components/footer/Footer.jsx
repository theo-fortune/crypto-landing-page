import React from "react";
import "./footer.css";
import { Logo, Facebook, Twitter, Instagram } from "../index";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container_first">
          <img src={Logo} alt="Logo" />
          <p>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="footer__container_first--social_icons">
            <a href="Facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="Facebook">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="Facebook">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer__container_second">
          <div className="footer__container_second--heading">
            <h4>About Us</h4>
          </div>
          <div className="footer__container_second--links">
            <a href="whatever">Whitepaper</a>
            <a href="whatever">Blog</a>
            <a href="whatever">Activity</a>
          </div>
        </div>
        <div className="footer__container_third">
          <div className="footer__container_third--heading">
            <h4>Support</h4>
          </div>
          <div className="footer__container_third--links">
            <a href="whatever">Help & Support</a>
            <a href="whatever">Community</a>
            <a href="whatever">Author Profile</a>
            <a href="whatever">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <a href="hey">All rights reserved @2021</a>
      </div>
      <div className="footer__res">
        <div className="footer__res_first-first">
          <div className="footer__res_first-first--one">
            <h4>Hello</h4>
            <a href="whatever">Whitepaper</a>
            <a href="whatever">Blog</a>
            <a href="whatever">Activity</a>
          </div>
          <div className="footer__res_first-first--two">
            <h4>Support</h4>
            <a href="whatever">Help & Support</a>
            <a href="whatever">Community</a>
            <a href="whatever">Author Profile</a>
            <a href="whatever">Contact</a>
          </div>
        </div>
        <div className="footer__res_first-second">
          <div className="footer__res_first-second--img">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer__res_first-second--text">
            <p>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="footer__res_first-second--links">
            <a href="Facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="Facebook">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="Facebook">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
