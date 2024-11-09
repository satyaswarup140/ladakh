import React from 'react';
import './Header.css'; // Make sure to import the CSS file for styles

const Header = () => {
  return (
    <div className="header">
      <h1>Brisphere</h1>
      <div className="header-links">
        <a href="#discover">Discover</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
      </div>
    </div>
  );
};

export default Header;

