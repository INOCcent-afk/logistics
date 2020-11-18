import React from "react";
import label from "./images/white-label-vector.png";
import "./SolutionContent.scss";

function SolutionContent() {
  return (
    <>
      <div className="solution-content">
        <div className="solution-content-fSect">
          <div className="solution-content-fSect-title">
            <p>Pain points solved</p>
          </div>
          <div className="solution-content-fSect-content">
            <div className="item">
              <p>Limiting your revenue stream</p>
              <p>
                Stop making small commissions on someone else’s service. Start
                making 70% margins or higher.
              </p>
            </div>
            <div className="item">
              <p>Supporting a system you don’t control</p>
              <p>
                Own the solution and gain the control you need to support your
                customers the right way.
              </p>
            </div>
            <div className="item">
              <p>Giving your customers away</p>
              <p>
                Instead of sending your customers to other vendors, offer them a
                solution branded for your business.
              </p>
            </div>
            <div className="item">
              <p>Training your team</p>
              <p>
                Our easy-to-use web portal makes training your employees a snap.
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="solution-content-sSect">
          <div className="solution-content-sSect-img">
            <img src={label} alt="png" />
          </div>
          <div className="solution-content-sSect-p">
            <p>
              “Since signing up with Logistics, I must say I am very happy and
              impressed. I have increased my net revenue to 50%. If you are
              looking to brand your own solution, increase revenue streams and
              work with a top notch support team; Logistics is the company to
              choose.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionContent;
