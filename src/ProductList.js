import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import FloatingCart from "./FloatingCart"; // Assuming you have a FloatingCart component

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

function ProductList({ match }) {
  const { category } = match.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async (url) => {
    try {
      const result = await axios.get(url);
      const csv = result.data;
      console.log("CSV Data:", csv); // Log CSV data

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

          console.log("Parsed Data:", data); // Log parsed data
          setProducts(data);
          setLoading(false);
        },
        header: false,
        skipEmptyLines: true,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(sheetUrls[category]);
    const intervalId = setInterval(() => fetchData(sheetUrls[category]), 60000); // Fetch data every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [category]);

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

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.Name !== product.Name
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="ProductList">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
    </div>
  );
}

export default ProductList;
