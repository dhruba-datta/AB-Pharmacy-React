// src/FloatingCart.js

import React, { useState } from "react";
import "./FloatingCart.css";

const FloatingCart = ({ cartItems, onRemoveFromCart }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.Price * item.quantity,
    0
  );

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="floating-cart">
      <div className="cart-icon" onClick={handleTogglePopup}>
        <span className="cart-icon-count">{cartItems.length}</span>
      </div>
      {isPopupOpen && (
        <div className="cart-popup">
          <div className="popup-header">
            <h2>Cart</h2>
            <button className="close-popup" onClick={handleTogglePopup}>
              X
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.product.Name}</div>
                      <div className="cart-item-price">
                        MRP: {item.product.Price.toFixed(2)}
                      </div>
                      <div className="cart-item-quantity">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemoveFromCart(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-total">
            Total:{" "}
            <span className="cart-total-price">{cartTotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
