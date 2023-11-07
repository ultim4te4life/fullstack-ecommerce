import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import productsdata from "../dummyData/ProductsData";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

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
  console.log(loading);
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "200px",
            width: "100vw",
          }}
        >
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            className="product-list"
          >
            {filteredProducts.map((product) => (
              <div
                style={{
                  width: "300px", // Adjust width and margin as needed
                  marginBottom: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={product.id}
                className="product-card"
              >
                <img
                  style={{
                    width: "190px",
                    height: "257px",
                    borderRadius: "8px",
                    display: "block", // Center the image
                    margin: "0 auto", //
                  }}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p style={{ color: "black" }}>${product.price}</p>
                <p
                  style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    borderRadius: "0 0 8px 8px",
                    color: "black",
                  }}
                >
                  {product.description}
                </p>

                <button
                  style={{ marginLeft: "150px" }}
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
