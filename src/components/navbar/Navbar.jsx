import React from "react";
import "./navbar.css";
import websiteLogo from "../../assets/images/websitelogo.png";
import * as FiIcons from "react-icons/fi";
export default function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <img className="logo" alt="website logo" src={websiteLogo} />
        <div className="nav-pills-container">
          <div>HOME</div>
          <div>THE JOURNEY</div>
          <div>TEAM</div>
          <div>STORE</div>
          <div>CONTACT</div>
        </div>
        <div className="user-profile-pill">
          <FiIcons.FiUser className="logo" />
          <div>GAGAN</div>
        </div>
      </nav>
    </>
  );
}
