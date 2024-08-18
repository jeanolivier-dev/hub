"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <div className="n-wrapper">
      {/* Desktop version */}
      <div className="container">
        <div className="n-container">
          {/* Left section */}
          <div className="n-logo">
            <span>GOHUB</span>
          </div>

          {/* Right section */}
          <div className="n-right">
            <div className="n-menu">
              <span>Customers</span>
              <span>Products</span>
              <span>Finance</span>
              <span>Contact</span>
            </div>
            <div className="signup">Sign Up</div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="nm-container">
        {/* Logo */}
        <span>GOHUB</span>

        {/* Menu Icons */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>Customers</span>
          <span>Products</span>
          <span>Finance</span>
          <span>Contact</span>
          <div className="m-signup-button">Sign Up</div>
        </div>
      </div>
    </div>
  );
}
