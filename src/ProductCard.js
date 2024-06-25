// src/ProductCard.js

import React, { useState, useEffect } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const [quantity, setQuantity] = useState(0);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  useEffect(() => {
    const cartItem = cartItems.find(
      (item) => item.product.Name === product.Name
    );
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowQuantitySelector(true);
    } else {
      setQuantity(0);
      setShowQuantitySelector(false);
    }
  }, [cartItems, product.Name]);

  const addToCartHandler = () => {
    setQuantity(1);
    onAddToCart(product, 1);
    setShowQuantitySelector(true);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onAddToCart(product, quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onAddToCart(product, quantity + 1);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.Image} alt={product.Name} />
      <div className="product-info">
        <h3 className="product-name">{product.Name}</h3>
        <p className="product-description">{product.Description}</p>
        <p className="product-price">Price: ৳ {product.Price.toFixed(2)}</p>
        {product.Stock === "Y" ? (
          showQuantitySelector ? (
            <div className="quantity-selector">
              <button className="quantity-button" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          ) : (
            <button className="add-to-cart-button" onClick={addToCartHandler}>
              Add to Cart
            </button>
          )
        ) : (
          <button className="out-of-stock-button" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
