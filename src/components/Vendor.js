import React from "react";
import "./Vendor.scss";

function Vendor({
  title,
  p,
  img85,
  img86,
  img87,
  img88,
  img85p,
  img86p,
  img87p,
  img88p,
}) {
  return (
    <>
      <div className="vendor-container">
        <div className="vendor">
          <div className="vendor-content">
            <p>{title}</p>
            <p>{p}</p>
          </div>
          <div className="vendor-images">
            <div className="sticker">
              <img src={img85} alt="webp" />
              <p>{img85p}</p>
            </div>
            <div className="sticker">
              <img src={img86} alt="webp" />
              <p>{img86p}</p>
            </div>
            <div className="sticker">
              <img src={img87} alt="webp" />
              <p>{img87p}</p>
            </div>
            <div className="sticker">
              <img src={img88} alt="webp" />
              <p>{img88p}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vendor;
