import React from "react";
import "./ContactForm.scss";
import FloatImg from "../images/Path-1298.webp";

function ContactForm() {
  return (
    <>
      <div className="form-container" id="jump-form">
        <div className="form-container-title">
          <p>Rise Above the Competition & Start Your Own VoIP Business</p>
        </div>
        <div className="form-container-float-img">
          <img src={FloatImg} alt="webp" />
        </div>
        <form>
          <div className="form-title">
            <p>Contact us for a</p>
            <span>text drive.</span>
          </div>
          <div className="form-content">
            <input required={true} type="text" placeholder="First Name*" />
            <input required={true} type="text" placeholder="Last Name*" />
            <input required={true} type="email" placeholder="Email*" />
            <input required={true} type="text" placeholder="Company Name*" />
            <input required={true} type="tel" placeholder="Phone" />
            <input type="submit" value="Request Demo" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
