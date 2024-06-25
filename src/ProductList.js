import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import FloatingCart from "./FloatingCart";
import Navbar from "./Navbar";
import "./ProductList.css"; // Ensure your spinner styles are included

const sheetUrls = {
  all: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=1110016514&output=csv",
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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all"); // Default to 'all' category
  const [viewMore, setViewMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to fetch data from Google Sheets
  const fetchData = async (url, viewAll = false) => {
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

          if (!viewAll) {
            setProducts(data.slice(0, 10)); // Show only the first 10 products initially
          } else {
            setProducts(data); // Show all products when viewMore is true
          }
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
    setViewMore(false); // Reset viewMore when category changes
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

  // Function to handle "View More" button click
  const handleViewMore = () => {
    setViewMore(true);
    fetchData(sheetUrls[currentCategory], true);
  };

  // Function to handle search query change
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredProducts([]);
      setViewMore(false);
    } else {
      const results = products.filter((product) =>
        product.Name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
      setViewMore(true);
    }
  };

  return (
    <section id="productlist" className="product-section">
      <Navbar
        setCurrentCategory={setCurrentCategory}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchQueryChange}
        setFilteredProducts={setFilteredProducts}
        handleViewMore={handleViewMore}
      />
      <h1>Products</h1>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="product-list">
            {(filteredProducts.length > 0 ? filteredProducts : products).map(
              (product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onAddToCart={handleAddToCart}
                  cartItems={cartItems}
                />
              )
            )}
            {filteredProducts.length === 0 && searchQuery && (
              <p>No products found</p>
            )}
          </div>
          {!viewMore && products.length === 10 && (
            <button className="view-more" onClick={handleViewMore}>
              View More
            </button>
          )}
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
