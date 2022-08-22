import React from "react";
import "./features.css";
import { digital, money, secure, wallet, thumb, guard } from "../index";

const Card = (props) => {
  return (
    <div className="features__benefits_card">
      <img src={props.img} alt="card"/>
      <h4>{props.name}</h4>
      <p>
        {props.text}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="features__header">
        <h1>Why Choose Us</h1>{" "}
        <p>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500's.
        </p>
      </div>
      <div className="features__benefits">
        <Card
          name={"Digital Saving"}
          img={digital}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
        <Card
          name={"Online Investment"}
          img={money}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
        <Card
          name={"Secure and Fast"}
          img={secure}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
        <Card
          name={"Purchase via Cards"}
          img={wallet}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
        <Card
          name={"Instant and fee-free transaction"}
          img={thumb}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
        <Card
          name={"Safe and accurate"}
          img={guard}
          text={
            "A Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
      </div>
    </div>
  );
};

export default Features;
