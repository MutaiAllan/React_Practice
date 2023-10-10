import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Nav.css";

function NavBar({ searchTerm, setSearchTerm }) {
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleLogInClick = () => {
      navigate("/login");
    };
  
    return (
      <div className="navbar">
        <h1><span>S</span>nudge<span>.</span></h1><br></br>
          <div className="auth-actions">
            {/* <button onClick={handleSignUpClick} className="btn btn-danger">Sign Up</button> */}
            {/* <button onClick={handleLogInClick} className="btn btn-info">Log In</button> */}
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About Us</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
      </div>
    );
  }
  
  export default NavBar;
  