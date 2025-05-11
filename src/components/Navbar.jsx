// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="GameArena" />
        <h1>GameArena</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/tournaments">Tournaments</Link></li>
        <li><Link to="/leaderboards">Leaderboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Join Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
