import React from "react";
import "./navbar.css";
import websiteLogo from "../../assets/images/websitelogo.png";
import * as FiIcons from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <img className="logo" alt="website logo" src={websiteLogo} />
        <div className="nav-pills-container">
          <div>HOME</div>
          <NavLink className="individual-component" to="/journey">
            JOURNEY
          </NavLink>
          <NavLink className="individual-component" to="/team">
            TEAM
          </NavLink>
          <NavLink className="individual-component" to="/">
            STORE
          </NavLink>
          <NavLink className="individual-component" to="/contact">
            CONTACT
          </NavLink>
        </div>
        <div className="user-profile-pill">
          <FiIcons.FiUser className="logo" />
          <div>GAGAN</div>
        </div>
      </nav>
    </>
  );
}
