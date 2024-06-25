import React, { useState } from "react";
import "./FloatingCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const FloatingCart = ({ cartItems, onRemoveFromCart }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.Price * item.quantity,
    0
  );

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleToggleOrderForm = () => {
    if (cartItems.length === 0) {
      alert("Please add products to the cart before placing an order.");
      return;
    }
    setIsOrderFormOpen(!isOrderFormOpen);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the order details with line breaks
    const orderDetails = `${name}\nAddress: ${address}\n\n${cartItems
      .map((item) => `${item.product.Name} x ${item.quantity}`)
      .join("\n")}\n\nTotal: ৳ ${cartTotal.toFixed(2)}`;

    // Create the WhatsApp URL with the order details
    const whatsappUrl = `https://wa.me/+8801912555765?text=${encodeURIComponent(
      orderDetails
    )}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");

    // Reload the website after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 500); // Adjust the delay as needed
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
              <p>Your cart is empty. Please add products.</p>
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
                          Price: ৳ {item.product.Price.toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-item-column cart-item-center">
                        <span className="cart-item-quantity">
                          Quantity: {item.quantity}
                        </span>
                        <span className="cart-item-total">
                          Total: ৳{" "}
                          {(item.product.Price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="cart-item-column cart-item-right">
                        <button
                          className="cart-item-remove"
                          onClick={() => onRemoveFromCart(item.product)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="cart-total">
              <hr className="thin-hr" />
              Total Price: ৳{" "}
              <span className="cart-total-price">{cartTotal.toFixed(2)}</span>
            </div>
            <button
              className="order-button"
              onClick={handleToggleOrderForm}
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {isOrderFormOpen && (
        <div className="order-form-overlay" onClick={handleToggleOrderForm}>
          <div className="order-form" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={handleToggleOrderForm}>
              &times;
            </button>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Shop Name:
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Market Name:
                <select
                  value={address}
                  onChange={handleAddressChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a market</option>
                  <option value="Banglabazar">Banglabazar</option>
                  <option value="Bhadrashan">Bhadrashan</option>
                  <option value="Boharatola">Boharatola</option>
                  <option value="Bondorkhola">Bondorkhola</option>
                  <option value="Chanderchar">Chanderchar</option>
                  <option value="Choto Kutubpur">Choto Kutubpur</option>
                  <option value="Ganganagar">Ganganagar</option>
                  <option value="Kazirhat">Kazirhat</option>
                  <option value="Majhirghat">Majhirghat</option>
                  <option value="Matborchar">Matborchar</option>
                  <option value="Naodoba">Naodoba</option>
                  <option value="Panchar">Panchar</option>
                  <option value="Shakpur">Shakpur</option>
                  <option value="Sheruail">Sheruail</option>
                  <option value="Shibchar Sadar 1">Shibchar Sadar 1</option>
                  <option value="Shibchar Sadar 2">Shibchar Sadar 2</option>
                  <option value="Shibchar Sadar 3">Shibchar Sadar 3</option>
                  <option value="Shibchar Sadar 4">Shibchar Sadar 4</option>
                  <option value="Surjonagar">Surjonagar</option>
                  <option value="Zajira 1">Zajira 1</option>
                  <option value="Zajira 2">Zajira 2</option>
                </select>
              </label>
              <br />
              <button type="submit" className="submit-button">
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCart;
