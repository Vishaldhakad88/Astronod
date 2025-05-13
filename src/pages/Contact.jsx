import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./contact.css";
import contactimg from "../assets/contactimg.jpeg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const sendToWtsp = () => {
    const number = "+918821991572"; // WhatsApp number
    const message = `Name: ${name}
                       %0aEmail: ${email}  
                       %0aPhone: ${phone}
                       %0aMessage: ${msg}%0a%0a`;
    // %0a is use for jump in next line -------------------
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank").focus();
  };

  return (
    <div>
      <Header />
      <center>
        Fill Free <span style={{ color: "orangered" }}> Enquiry</span> Form
      </center>
      <div className="underLine"></div>
      <div>
        <div class="container-fluid text-center Inquiry">
          <div className="InquiryBox">
            <div className="InquiryForm">
              <br />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <input
                type="number"
                placeholder="Enter your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <input
                id="msg"
                placeholder="Enter your message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              <br />
              <button type="button" class="btn btn-danger" onClick={sendToWtsp}>
                SUBMIT
              </button>
            </div>
            <div className="InquiryImg">
              <img className="imgcontact" src={contactimg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
