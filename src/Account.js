import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import card from "./img/card.png";
import "./Account.scss";

function Account() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main__bar1">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <h1 className="head1">Set up your Account</h1>
          </div>

          <div className="main__bar2">
            <form
              action="#"
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* card number */}

              <input
                type="text"
                name="Card Number"
                className="form__inp"
                placeholder="Card Number"
                required
              />

              {/* expiration date */}

              <input
                name="Expiration Date"
                placeholder="Expiration Date"
                className="form__inp"
                required
              />
              {/* cvv */}

              <input
                name="Cvv"
                placeholder="Cvv"
                className="form__inp"
                required
              />

              <div className="box">
                <label htmlFor="checkbox" className="box__show">
                  <input id="checkbox" type="checkbox" />
                  Stay logged in for faster checkout.
                </label>
              </div>

              <div className="shell">
                <a href="/Login" className="button3">
                  Next
                </a>
              </div>
            </form>
            <div className="main__bar3">
              <div className="lang">
                <a href="" className="footer__link">
                  English
                </a>
                <a href="" className="footer__link">
                  Français
                </a>
                <a href="" className="footer__link">
                  Español
                </a>
                <a href="" className="footer__link">
                  中国
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
