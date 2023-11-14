import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import "../ProductsPage.css"; // Import the CSS file

function Products(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("query");
    // Set the searchQuery state based on the URL query parameter
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [location.search]);
  const { addProduct, loading, data } = useCartContext();
  console.log(data);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleAddcart = (product) => {
    addProduct(product);
    // Show a notification when a product is added to the cart
    toast.success(`${product.name} added to the cart!`, {
      position: "top-right",
      autoClose: 3000, // Close the notification after 3 seconds
    });
  };
  const filteredProducts =
    selectedCategory === "All"
      ? data.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data.filter(
          (product) =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
  return (
    <div>
      <Header user={props.user} darkMode={true} />
      <div>
        <div className="container">
          <div className="category-list">
            <h2>Categories</h2>
            <ul>
              <li>
                <button onClick={() => setSelectedCategory("All")}>All</button>
              </li>
              <li>
                <button onClick={() => setSelectedCategory("iPhone")}>
                  iPhones
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedCategory("Apple Watch")}>
                  Apple Watches
                </button>
              </li>
            </ul>
            <div style={{ marginLeft: "" }} className="search-bar">
              <input
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  className="products-image"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>

                <button
                  className="add-to-cart-button"
                  disabled={loading}
                  onClick={(e) => {
                    handleAddcart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer /> {/* Add this line to render notifications */}
    </div>
  );
}

export default Products;
