import React from "react";
import "./hero.css";
import { playCircle, heroImg, heroRect } from "../index";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content-left">
        <h1>Save Time and Start Digital Wallet!</h1>
        <p>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <img src={heroImg} alt="logo" className="heroBlockImg"/>
        <div className="hero__content-left_button">
          <button className="hero__content-left_button1">Get Started</button>
          <button className="hero__content-left_button2">
            <img src={playCircle} alt="playCircle" />
            <b>Watch Video</b>
          </button>
        </div>
        <div className="hero__content-left_info">
          <div className="hero__content-left_info--users">
            <h4>1.9k+</h4>
            <b>Active Users</b>
          </div>
          <div className="hero__content-left_info--features">
            <h4>20+</h4>
            <b>New Features</b>
          </div>
        </div>
      </div>
      <div className="hero__content-right">
        <img src={heroImg} alt="hero-img" className="hero__content-right_img" />
      </div>
      <img src={heroRect} alt="heroRect" className="heroRect" />
    </div>
  );
};

export default Hero;
