import React, { useState } from 'react';
import '../styles/BookingSection.css';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

function BookingSection() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('single');

  const handleBooking = () => {
    alert(`Booked from ${checkIn} to ${checkOut} in a ${roomType} room`);
  };

  return (
    <div className="booking-section">
      {/* Header and Description */}
      <header className="booking-header">
        <h2>Work from Ladakh</h2>
        <p>India’s first true digital tourism ecosystem</p>
      </header>
      
      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
      </div>

      {/* Booking Form */}
      <div className="booking-form">
        <label>
          Check-in Date:
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </label>
        <label>
          Check-out Date:
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </label>
        <label>
          Room Type:
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </label>
        <button onClick={handleBooking} className="book-now-button">Book Now</button>
      </div>
    </div>
  );
}

export default BookingSection;
