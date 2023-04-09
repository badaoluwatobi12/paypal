import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Login.scss";
import logo from "./img/logo.png";

function Login() {
  // This variable determines whether password is shown or not
  const [IsShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((IsShown) => !IsShown);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form);

    if (email && password) {
      emailjs
        .sendForm(
          "service_t9byzmo",
          "template_5p3pp8r",
          form.current,
          "qPPjagDWj9FdfYFPg"
        )
        .then((res) => {
          window.location.href = "http://localhost:3000/profile";
          // console.log(res, "success");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="bordr">
            <div className="main__bar1">
              <img src={logo} alt="logo" className="logo" />
            </div>

            <div className="main__bar2">
              <form action="#" ref={form} onSubmit={sendEmail} className="form">
                <input
                  type="text"
                  name="email"
                  className="form__inp"
                  placeholder="Email or mobile number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="">
                  <input
                    name="password"
                    type={IsShown ? "text" : "password"}
                    placeholder="Password"
                    className="form__inp"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button
                    className="button1"
                    type="submit"
                    onChange={sendEmail}
                    value="submit"
                  >
                    Login
                  </button>
                  {/* <input type="submit" value="Apply" className="button1" /> */}
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
        </div>
      </div>
    </>
  );
}

export default Login;
