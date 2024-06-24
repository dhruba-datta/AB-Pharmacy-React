import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import FloatingCart from "./FloatingCart";
import Navbar from "./Navbar";
import "./ProductList.css"; // Ensure your spinner styles are included

const sheetUrls = {
  general:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=1169693582&output=csv",
  popular:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=1792446468&output=csv",
  herbal:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=836808070&output=csv",
  surgical:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=627245785&output=csv",
  baby_food:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=582779495&output=csv",
  others:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=231418887&output=csv",
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("general");

  // Function to fetch data from Google Sheets
  const fetchData = async (url) => {
    try {
      const result = await axios.get(url);
      const csv = result.data;

      Papa.parse(csv, {
        complete: (results) => {
          const data = results.data
            .slice(3) // Skip header rows
            .map((values) => {
              const name = values[2] ? values[2].trim() : "";
              if (name === "") return null; // Skip if name is empty

              const defaultImageUrl = "https://example.com/default-image.jpg"; // Replace with your default image URL
              const imageUrl =
                values[6] && values[6].trim() !== ""
                  ? values[6].trim()
                  : defaultImageUrl; // Column G for image URL

              return {
                Name: name, // Column C
                Description: values[3] ? values[3].trim() : "", // Column D
                Price: values[4] ? parseFloat(values[4].trim()) || 0 : 0, // Column E, default to 0 if empty
                Stock: values[5] ? values[5].trim() : "", // Column F
                Image: imageUrl, // Column G for image URL or default
              };
            })
            .filter((product) => product !== null); // Filter out null products

          setProducts(data);
          setLoading(false);
        },
        header: false,
        skipEmptyLines: true,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Fetch data when component mounts and set interval for periodic fetching
  useEffect(() => {
    setLoading(true); // Set loading to true when category changes
    fetchData(sheetUrls[currentCategory]);
    const intervalId = setInterval(
      () => fetchData(sheetUrls[currentCategory]),
      60000
    ); // Fetch data every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentCategory]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find(
      (item) => item.product.Name === product.Name
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.Name === product.Name ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product: product, quantity }]);
    }
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.Name !== product.Name
    );
    setCartItems(updatedCartItems);
  };

  return (
    <section id="productlist" className="product-section">
      <Navbar setCurrentCategory={setCurrentCategory} />
      <h1>Products</h1>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="category-buttons">
            {Object.keys(sheetUrls).map((category) => (
              <button
                key={category}
                className={currentCategory === category ? "active" : ""}
                onClick={() => {
                  setLoading(true); // Set loading to true when category button is clicked
                  setCurrentCategory(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="product-list">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
          <FloatingCart
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </>
      )}
    </section>
  );
};

export default ProductList;
