import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="appName">
          <h1>
            <span style={{ color: "orange" }}>A</span>stro
          </h1>
          <p>to check your daily horoscope, click the link below.</p>
          <button style={{ color: "orangered", fontWeight: "bolder" }}>
            Blogs &nbsp; <i class="bi bi-box-arrow-up-right"></i>
          </button>
          <br />
          <button>
            Our Privacy Policy <i class="bi bi-box-arrow-up-right"></i>
          </button>
          <button>
            Terms & Conditions <i class="bi bi-box-arrow-up-right"></i>
          </button>
          <button>
            Cancellation & Refund Policy{" "}
            <i class="bi bi-box-arrow-up-right"></i>
          </button>
          <br />
          <span className="media">
            <i class="bi bi-facebook"></i>&nbsp;&nbsp;
            <i class="bi bi-instagram"></i>&nbsp;&nbsp;
            <i class="bi bi-youtube"></i>&nbsp;&nbsp;
          </span>
          <br />
          <h5 style={{ color: "white" }}>NEED OUR HELP</h5>
          <p>
            Speak to our Experts and get instant assistance regarding any query
            you may have. <br /> whats app us at 8821991572
          </p>
          <br />
          <button
            type="button"
            class="btn btn-warning p-2 w-4"
            className="cityBtn"
          >
            CURRENT CITIES
          </button>

          <br />
          <br />

          <h5 style={{ color: "white" }}>CONTACT US TODAY</h5>
          <p>Head Office - Astrology center</p>
          <p>
            Address-Shop No. 28, GF, Astrology TDI City, vijay nagar, indore
            Mandhya Pradesh
          </p>
          <p>E-mail-vishaldhakad1v1@gmail.com</p>

          <div className="line"></div>
          <br />
          <p>
            ©️ Copyright 2025 by Astro. All right Reserved. <br /> &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Developed By Vishal dhakad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
