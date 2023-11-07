import React, { useRef } from "react";
import ProductsData from "../dummyData/ProductsData"; // Import your product data
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
function Sidescroll2() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { data, loading } = useCartContext();

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const startTime = performance.now();
      const duration = 500; // Scroll animation duration in milliseconds

      const scrollStep = (timestamp) => {
        const currentTime = timestamp - startTime;
        if (currentTime < duration) {
          const progress = currentTime / duration;
          container.scrollLeft += scrollOffset * progress;
          requestAnimationFrame(scrollStep);
        } else {
          container.scrollLeft += scrollOffset;
        }
      };

      requestAnimationFrame(scrollStep);
    }
  };
  const iwatchProducts = data.filter((product) =>
    product.name.toLowerCase().includes("watch")
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <button onClick={() => scroll(-30)}>{"<"}</button>
        <div
          ref={containerRef}
          style={{
            width: "55%",
            overflowX: "auto",
            whiteSpace: "nowrap",
            position: "relative",
            padding: "0 10px",
          }}
        >
          {!loading &&
            iwatchProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  width: "190px",
                  color: "white",
                  display: "inline-block",
                  margin: "0 10px",
                  padding: "10px",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ width: "190px", height: "257px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ color: "black" }}>{product.name}</p>
                  <p style={{ color: "black" }}>{product.price}</p>
                  <Link to="/product">
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Buy
                    </button>
                  </Link>{" "}
                </div>
              </div>
            ))}
        </div>
        <button onClick={() => scroll(30)}>{">"}</button>
      </div>
    </div>
  );
}

export default Sidescroll2;
