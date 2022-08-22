import React from "react";
import "./support.css";

const Support = () => {
  return (
    <div className="support">
      <h1>Ready to get updated?</h1>
      <p>
        A Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <div className="support__input">
        <input type="email" placeholder="Email Address" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Support;
