import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const LinkStyle = {
    textDecoration: "none",
    color: "#141414",
  };

  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav((prev) => !prev);
    document.body.classList.toggle("disable-scroll");
  };

  const hideNav = () => {
    setNav(false);
    document.body.className = "";
  };

  const [header, setHeader] = useState(false);

  let prevScrollpos = window.pageYOffset;

  const handleScroll = () => {
    let currentScrollpos = window.pageYOffset;

    if (prevScrollpos > currentScrollpos) {
      setHeader(false);
    } else {
      setHeader(true);
    }

    prevScrollpos = currentScrollpos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [header]);

  return (
    <>
      <header className={header ? "showHeader" : ""}>
        <div className="header-logo">
          <Link onClick={hideNav} style={LinkStyle} to="/">
            <h1>LOGISTICS</h1>
          </Link>
          <div className="header-logo-links">
            <li>
              <Link to="/reseller">RESELLER PLATFORM</Link>
            </li>
            <li>
              <Link to="/solutions">SOLUTIONS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>

            <li>
              <Link to="whitepapers">WHITE PAPERS</Link>
            </li>
          </div>
        </div>
        <div className="login-links">
          <li>
            <Link to="/">Partner Login</Link>
          </li>
          <li>
            <AnchorLink href="#jump-form">Request Demo</AnchorLink>
          </li>
        </div>
        <div className="hamburger" onClick={showNav}>
          <div className="burger"></div>
        </div>
      </header>
      {/* ******************************* */}
      <div className={nav ? "showNav" : "hidden-nav"}>
        <ul className="hidden-nav-links">
          <li>
            <Link onClick={showNav} to="/reseller">
              RESELLER
            </Link>
            <div className="line"></div>
          </li>
          <li>
            <Link onClick={showNav} to="/solutions">
              SOLUTIONS
            </Link>
            <div className="line"></div>
          </li>
          <li>
            <Link onClick={showNav} to="/services">
              SERVICES
            </Link>
            <div className="line"></div>
          </li>
          <li>
            <Link onClick={showNav} to="/">
              PARTNER LOGIN
            </Link>
            <div className="line"></div>
          </li>
          <li>
            {/* <Link to="/">REQUEST DEMO</Link> */}
            <AnchorLink onClick={showNav} href="#jump-form">
              Request Demo
            </AnchorLink>
            <div className="line"></div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
