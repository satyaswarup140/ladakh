import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Brisphere</h3>
          <p>Spituk, Ladakh</p>
          <p>India, 194101</p>
          <p>+91 - 7748091023</p>
          <p>amit.jha7890@gmail.com</p>
          <button className="location-btn">Location</button>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#refunds">Refunds</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;