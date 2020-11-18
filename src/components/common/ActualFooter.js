import React from "react";
import "./ActualFooter.scss";
import IconFb from "../images/facebook-color.webp";
import IconEmail from "../images/email-color.webp";
import IconLinkedIn from "../images/linkedin-color.webp";

function ActualFooter() {
  return (
    <>
      <div className="actual-footer-container">
        <div className="actual-footer">
          <div className="actual-footer-subscribe">
            <p>Subscribe to RingLogix via Email</p>
            <p>
              Get the latest news and updates by subscribing below. Don’t miss
              this chance.
            </p>
            <form>
              <input required={true} type="email" placeholder="Email*" />
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>
          <div className="actual-footer-section firstSec">
            <div className="actual-footer-section-item">
              <p>Email</p>
              <p>sales@ringlogix.com</p>
              <p>support@ringlogix.com</p>
            </div>
            <div className="actual-footer-section-item">
              <p>Mailing Address</p>
              <p>7735 NW 146 ST,</p>
              <p>Suite 202</p>
              <p>Miami Lakes, FL 33016</p>
            </div>
          </div>
          <div className="actual-footer-section ">
            <div className="actual-footer-section-item">
              <p>Company Info</p>
              <p>Blog</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div className="actual-footer-section-item">
              <p>Sitemap</p>
              <p>Partner Features</p>
              <p>Client Features</p>
              <p>Demo</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="actual-footer-icons">
            <div className="actual-footer-icons-img">
              <img src={IconFb} alt="webp" />
              <img src={IconEmail} alt="webp" />
              <img src={IconLinkedIn} alt="webp" />
            </div>
            <p>© 2020 Copyright - Logistics -</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActualFooter;
