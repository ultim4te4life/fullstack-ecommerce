import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doc,
  onSnapshot,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { database, auth } from "../firebase/firebase"; // Adjust import based on your actual setup
import { useEffect, useState } from "react";
import StripePayment from "../components/StripePayment";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "20px",
};

const summaryStyle = {
  flex: "1",
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  marginRight: "20px",
};

const orderItemsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const orderItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const itemDetailsStyle = {
  flex: "1",
};

const formStyle = {
  flex: "1",
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
};

const formGroupStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const selectStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};

const notifyAddToCart = (productName) => {
  toast.success(`Added ${productName} to the cart!`, {
    position: "top-right",
    autoClose: 3000,
  });
};

const notifyDecreaseCart = (productName) => {
  toast.info(`Decreased quantity of ${productName} in the cart.`, {
    position: "top-right",
    autoClose: 3000,
  });
};

const notifyDeleteCart = (productName) => {
  toast.error(`Removed ${productName} from the cart.`, {
    position: "top-right",
    autoClose: 3000,
  });
};

const Checkout = (props) => {
  const { user } = props;
  const {
    addProduct,
    removeProduct,
    decreaseProduct,
    calculateTotalPrice,
    products,
    loading,
  } = useCartContext();

  const [shippingAddress, setShippingAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const [addressSaved, setAddressSaved] = useState(false);

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getAddressData = async () => {
      if (!user) return; // Make sure there's a logged-in user

      try {
        const userDocRef = doc(database, "users", user.uid);
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setShippingAddress({
            streetAddress: userData.streetAddress || "",
            city: userData.city || "",
            state: userData.state || "",
            zipCode: userData.zipCode || "",
            phoneNumber: userData.phoneNumber || "",
          });
          setAddressSaved(true);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    getAddressData();
  }, [user]);
  const handleAddcart = async (product) => {
    addProduct(product);
    notifyAddToCart(product.name);
  };

  const handleDecreaseCart = async (product) => {
    decreaseProduct(product);
    notifyDecreaseCart(product.name);
  };

  const handleRemovecart = async (product) => {
    console.log("Handling remove cart:", product);
    removeProduct(product);
    notifyDeleteCart(product.name);
  };

  const handleSaveAddress = () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(database, "users", user.uid);
      setDoc(
        userDocRef,
        {
          streetAddress: shippingAddress.streetAddress,
          city: shippingAddress.city,
          state: shippingAddress.state,
          zipCode: shippingAddress.zipCode,
          phoneNumber: shippingAddress.phoneNumber,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
        .then(() => {
          console.log("Address saved to Firestore");
          // Set editMode to false to switch to view mode
          setEditMode(false);
          setAddressSaved(true); // Address saved
        })
        .catch((error) => {
          console.error("Error saving address to Firestore:", error);
        });
    }
  };

  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header user={props.user} />
      <div style={containerStyle} className="checkout-container">
        <div style={summaryStyle} className="checkout-summary">
          <h2>Order Summary</h2>
          {products && products.length > 0 ? (
            <div style={orderItemsStyle} className="order-items">
              {products.map((product) => (
                <div
                  style={orderItemStyle}
                  className="order-item"
                  key={product.id}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100px", height: "150px" }}
                  />
                  <div style={itemDetailsStyle} className="item-details">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button
                      disabled={loading}
                      onClick={() => handleAddcart(product)}
                    >
                      +
                    </button>
                    <button
                      disabled={loading}
                      onClick={() => handleDecreaseCart(product)}
                    >
                      -
                    </button>
                    <button
                      disabled={loading}
                      onClick={() => handleRemovecart(product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div
            className="order-total"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
          </div>
        </div>
        <div style={formStyle} className="checkout-form">
          {editMode ? ( // If in edit mode, show address fields
            <div>
              <h2>Shipping Information</h2>
              <form>
                <div style={formGroupStyle} className="form-group">
                  <label>Street address:</label>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter your street address"
                    name="streetAddress"
                    value={shippingAddress.streetAddress}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div style={formGroupStyle} className="form-group">
                  <label>City:</label>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter your city"
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div style={formGroupStyle} className="form-group">
                  <label>State, territory, or military post:</label>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter your state or territory"
                    name="state"
                    value={shippingAddress.state}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div style={formGroupStyle} className="form-group">
                  <label>ZIP code:</label>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter your ZIP code"
                    name="zipCode"
                    value={shippingAddress.zipCode}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div style={formGroupStyle} className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    style={inputStyle}
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={shippingAddress.phoneNumber}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div style={formGroupStyle} className="form-group">
                  <button
                    type="button"
                    style={buttonStyle}
                    onClick={handleSaveAddress}
                  >
                    Save address
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h2>Shipping Information</h2>
              <p>
                <strong>Street Address:</strong> {shippingAddress.streetAddress}
              </p>
              <p>
                <strong>City:</strong> {shippingAddress.city}
              </p>
              <p>
                <strong>State, territory, or military post:</strong>{" "}
                {shippingAddress.state}
              </p>
              <p>
                <strong>ZIP code:</strong> {shippingAddress.zipCode}
              </p>
              <p>
                <strong>Phone Number:</strong> {shippingAddress.phoneNumber}
              </p>
              <button onClick={() => setEditMode(true)}>Edit</button>
              {addressSaved ? <StripePayment /> : null}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Checkout;
