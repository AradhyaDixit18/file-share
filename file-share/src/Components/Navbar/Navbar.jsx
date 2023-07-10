import React from "react";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title font-bold decoration-black">
      file-share
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links font-semibold">
         <a href="/"   className="w-2 abc  ">Home</a>
         <a href="/about" className="w-2 abc  ">About</a>
         <a href="/contact"  className="w-2 abc  ">Contact</a>
          
  </div>
</div>
  );
};

export default navbar;
