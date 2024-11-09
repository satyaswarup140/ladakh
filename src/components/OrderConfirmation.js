import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/OrderConfirmation.css';

function OrderConfirmation() {
  const order = useSelector((state) => state.order);

  return (
    <section className="order-confirmation">
      {order ? (
        <>
          <h2>Order Complete</h2>
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Check-in:</strong> {order.checkIn}</p>
          <p><strong>Check-out:</strong> {order.checkOut}</p>
          <p><strong>Rooms:</strong> {order.rooms}</p>
          <p><strong>Total:</strong> ₹12,430</p>
        </>
      ) : (
        <p>No order details available.</p>
      )}
    </section>
  );
}

export default OrderConfirmation;
