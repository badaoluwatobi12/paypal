import React, { useRef, useState } from "react";
import verified from "./img/verified.png";
import "./Account.scss";

function Done() {
  return (
    <>
      <div className="container">
        <div className="verifyBox">
          <img src={verified} alt="verified" className="verified" />
        </div>
        <a href="" className="button1">
          Login
        </a>
      </div>
    </>
  );
}

export default Done;
