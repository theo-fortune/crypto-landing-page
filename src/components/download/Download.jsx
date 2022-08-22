import React from "react";
import "./download.css";
import { Google, Apple, heroRect, mobile, glass, } from "../index";

const Download = () => {
  return (
    <div className="download">
      <img src={glass} alt="glass" className="glass" />
      <img src={heroRect} alt="rect" className="download__rect"/>
      <div className="download__container">
        <div className="download__container_left">
          <h1>Available and Download Anytime!</h1>
          <p>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="download__container_left--img">
            <a href="a">
              <img src={Google} alt="Apple" />
            </a>
            <a href="a">
              <img src={Apple} alt="Google" />
            </a>
          </div>
        </div>
        <div className="download__container_right">
          <img src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Download;
