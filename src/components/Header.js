import React from "react";
import ExLogo from "../icons/Ex-Logo";
import ExLogoText from "../icons/Ex-LogoText";
import Cart from "../icons/Cart";
import Logout from "../icons/Logout";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { CartProvider } from "../context/CartContext";
import { useCartContext } from "../context/CartContext";

function Header(props) {
  const { calculateTotalQuantity } = useCartContext(); // Get the function to calculate total quantity
  const { user, darkMode } = props;
  const isAdmin = user && user.email === "drbilguunt@gmail.com";
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const handleHomePage = () => {
    navigate("/");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleProduct = () => {
    navigate("/product");
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        background: darkMode
          ? "linear-gradient(155deg, #383638 2.06%, #0B0B0B 33.08%)"
          : "white",
        justifyContent: "center",
        boxShadow: "2px 4px 12px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          width: "1080px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          color: "#8D8E99",
          justifyContent: "space-between",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
        }}
      >
        <div style={{ cursor: "pointer" }} onClick={handleHomePage}>
          <ExLogo />
          <ExLogoText />
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={handleHomePage}>
            Home
          </span>
          <span style={{ cursor: "pointer" }} onClick={handleContact}>
            Contact
          </span>
          <span style={{ cursor: "pointer" }} onClick={handleProduct}>
            Products
          </span>
          {isAdmin && (
            <span style={{ cursor: "pointer" }} onClick={handleAdmin}>
              Admin
            </span>
          )}
        </div>
        {user ? (
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{user.email}</span>

            <Cart style={{ cursor: "pointer" }} onClick={handleCheckout} />
            <div
              style={{
                display: "flex",
                marginLeft: "-15px",
                marginTop: "-14px",
                color: "red",
                fontSize: "20px",
                transition: "transform 0.6s",
              }}
            >
              {calculateTotalQuantity()} {/* Display the total quantity */}
            </div>
            <Logout style={{ cursor: "pointer" }} onClick={handleSignOut} />
          </div>
        ) : (
          <div
            style={{
              width: "10%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ cursor: "pointer" }} onClick={handleLogin}>
              Login{" "}
            </span>
            <span>|</span>
            <span style={{ cursor: "pointer" }} onClick={handleSignUp}>
              Signup
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
