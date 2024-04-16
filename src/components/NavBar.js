import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav">
      <div className="Nav-image"></div>
      <div className="NavBar"><i className="fas fa-info-circle"></i><nav><Link to="/about">About Us</Link></nav></div>
      <div className="NavBar"><i className="fas fa-book"></i><nav><Link to="/courses">Courses</Link></nav></div>
      <div className="NavBar"><i className="fas fa-user-tie"></i><nav><Link to="/HireFromUs">Hire From Us</Link></nav></div>
      <div className="NavBar"><i className="fas fa-question-circle"></i><nav><Link to="/Faqs">Faqs</Link></nav></div>
      <div className="NavBar"><i className="fas fa-sign-in-alt"></i><nav><Link to="/signIn">Sign In</Link></nav></div>
      <div className="NavBar"><i className="fas fa-user-plus"></i><nav><Link to="/register">Register</Link></nav></div> {/* Add link to registration page */}
    </div>
  );
}

export default NavBar;
