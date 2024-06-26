import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import FloatingCart from "./FloatingCart";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProductList.css";

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
  const [currentCategory, setCurrentCategory] = useState("all");
  const [viewMore, setViewMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const fetchData = async (url, viewAll = false) => {
    try {
      const result = await axios.get(url);
      const csv = result.data;

      Papa.parse(csv, {
        complete: (results) => {
          const data = results.data
            .slice(3)
            .map((values) => {
              const name = values[2] ? values[2].trim() : "";
              if (name === "") return null;

              const defaultImageUrl = "https://example.com/default-image.jpg";
              const imageUrl =
                values[6] && values[6].trim() !== ""
                  ? values[6].trim()
                  : defaultImageUrl;

              return {
                Name: name,
                Description: values[3] ? values[3].trim() : "",
                Price: values[4] ? parseFloat(values[4].trim()) || 0 : 0,
                Stock: values[5] ? values[5].trim() : "",
                Image: imageUrl,
              };
            })
            .filter((product) => product !== null);

          if (!viewAll) {
            setProducts(data.slice(0, 10));
          } else {
            setProducts(data);
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

  useEffect(() => {
    setLoading(true);
    setViewMore(false);
    fetchData(sheetUrls[currentCategory]);
    const intervalId = setInterval(
      () => fetchData(sheetUrls[currentCategory]),
      60000
    );

    return () => clearInterval(intervalId);
  }, [currentCategory]);

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

  const handleViewMore = () => {
    setViewMore(true);
    fetchData(sheetUrls[currentCategory], true);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredProducts([]);
      setViewMore(false);
    } else {
      setCurrentCategory("all");
      fetchData(sheetUrls.all, true).then(() => {
        const results = products.filter((product) =>
          product.Name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(results);
        setViewMore(true);
      });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  };

  return (
    <section id="productlist" className="product-section">
      <Navbar
        setCurrentCategory={setCurrentCategory}
        onSearchClick={toggleSearch}
      />
      <div className="headline-container">
        <div className="headline-top">
          <h2 className="headline-h2">PRODUCTS</h2>
          <hr className="headline-hr" />
        </div>
        <h1 className="headline-h1">What We Offer</h1>
      </div>
      {isSearchOpen && (
        <div className="search-container">
          <div className="search">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              className={`search-input ${isSearchOpen ? "active" : ""}`}
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => handleSearchQueryChange("")}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>
      )}
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
