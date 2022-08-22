import React from "react";
import "./brand.css";
import { coinbase, blockchain, binance, bitmex } from "../index";

const brand = () => {
  return (
    <div className="brand">
      <div className="brand__recommendations">
        <hr />
        <p>Recommended By</p>
        <hr />
      </div>
      <div className="brand__companies">
        <img src={coinbase} alt="coinbase" />
        <img src={blockchain} alt="blockchain" />
        <img src={binance} alt="binance" />
        <img src={bitmex} alt="bitmex" />
      </div>
    </div>
  );
};

export default brand;
