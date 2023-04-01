import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import "./Login.scss";

function Login() {
  // This variable determines whether password is shown or not
  const [IsShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((IsShown) => !IsShown);
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main__bar1">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="main__bar2">
            <form
              action="#"
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* username */}

              <input
                type="text"
                name="email"
                className="form__inp"
                placeholder="Email or mobile number"
                required
              />

              {/* password */}
              <div className="">
                <input
                  name="password"
                  type={IsShown ? "text" : "password"}
                  placeholder="Password"
                  className="form__inp"
                  required
                />
              </div>

              <div className="box">
                <a href="" className="box__forget">
                  Forget password?
                </a>
                <label htmlFor="checkbox" className="box__show">
                  Show password?
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={IsShown}
                    onChange={togglePassword}
                  />
                </label>
              </div>

              <div className="">
                <a href="/Profile" className="button1">
                  Login
                </a>
              </div>

              <div className="">
                <a href="" className="button2">
                  Sign Up
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

        <div className="footer">
          <a href="" className="footer__link">
            Contact Us
          </a>
          <a href="" className="footer__link">
            Privacy
          </a>
          <a href="" className="footer__link">
            Legal
          </a>
          <a href="" className="footer__link">
            Worldwide
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
