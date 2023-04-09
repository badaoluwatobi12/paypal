import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "./img/logo.png";
import "./Profile.scss";

function Login() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form);

    if (name && phone && address) {
      emailjs
        .sendForm(
          "service_t9byzmo",
          "template_5p3pp8r",
          form.current,
          "qPPjagDWj9FdfYFPg"
        )
        .then((res) => {
          window.location.href = "http://localhost:3000/account";
          // console.log(res, "success");
          setName("");
          setAddress("");
          setPhone("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="main2">
          <div className="main2__bar4">
            <img src={logo} alt="logo" className="logo2" />
            <h1 className="head1">Set up your Profile</h1>
          </div>

          <div className="main2__bar5">
            <form action="#" className="form" ref={form} onSubmit={sendEmail}>
              {/* name */}
              <input
                type="text"
                name="name"
                className="form__inp"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* address */}
              <div className="">
                <input
                  name="address"
                  placeholder="Address"
                  className="form__inp"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* Phone */}
              <div className="">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="form__inp"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="shell">
                <button
                  type="submit"
                  onChange={sendEmail}
                  value="submit"
                  className="button3"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
