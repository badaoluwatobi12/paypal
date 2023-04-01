import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import "./Profile.scss";

function Login() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main__bar1">
            <img src={logo} alt="logo" className="logo2" />
            <div className="shellHead">
              <h1 className="head1">Set up your Profile</h1>
              <h1 className="head2">This info needs to be accurate</h1>
            </div>
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
                placeholder="Email Address"
                required
              />

              {/* password */}
              <div className="">
                <input
                  name="password"
                  placeholder="Password"
                  className="form__inp"
                  required
                />
              </div>

              <h3 className="text">
                We will use your email to help you sign up and as outlined in
                our
                <a href="" className="text__textLink">
                  Privacy Statement.
                </a>
              </h3>

              <div className="shell">
                <a href="/account" className="button3">
                  Next
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
