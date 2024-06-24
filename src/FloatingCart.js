import React, { useState } from "react";
import "./FloatingCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
    <>
      <div className="floating-cart" onClick={handleTogglePopup}>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItems.length > 0 && (
            <span className="cart-icon-count">{cartItems.length}</span>
          )}
        </div>
      </div>

      {isPopupOpen && (
        <div className="cart-popup-overlay" onClick={handleTogglePopup}>
          <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={handleTogglePopup}>
              &times;
            </button>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="cart-items">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-details">
                      <div className="cart-item-column cart-item-left">
                        <span className="cart-item-name">
                          {item.product.Name}
                        </span>
                        <span className="cart-item-mrp">
                          MRP: {item.product.Price.toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-item-column cart-item-center">
                        <span className="cart-item-quantity">
                          Quantity: {item.quantity}
                        </span>
                        <span className="cart-item-total">
                          Total:{" "}
                          {(item.product.Price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-item-column cart-item-right">
                        <button
                          className="cart-item-remove"
                          onClick={() => onRemoveFromCart(item.product)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
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
        </div>
      )}
    </>
  );
};

export default FloatingCart;
