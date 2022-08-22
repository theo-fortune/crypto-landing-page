import React from "react";
import "./howitworks.css";
import { tech, rect, glass } from "../index";

const Howitworks = () => {
  return (
    <div className="howitworks">
      <img src={rect} alt="rect" className="howitworks__left_img1" />
      <img src={glass} alt="glass" className="howitworks__left_img3" />
      <div className="abs">
        <div className="howitworks__left">
          <img src={tech} alt="tech" className="howitworks__left_img2" />
        </div>
        <div className="howitworks__right">
          <h1>Choose and Convert your Wallet Anytime!</h1>
          <p>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown. A Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.{" "}
          </p>
          <button>Choose your wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
