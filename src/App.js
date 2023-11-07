import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/SignIn";
import { useState } from "react";
import { auth } from "./firebase/firebase";
import Header from "./components/Header";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Modal from "react-modal";

import Admin from "./pages/Admin";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
    return () => getUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/sign-up" element={<SignUpPage user={user} />} />
          <Route path="/sign-in" element={<LoginPage user={user} />} />
          <Route path="/product" element={<Products user={user} />} />
          <Route path="/contact" element={<Contact user={user} />} />
          <Route path="/checkout" element={<Checkout user={user} />} />
          <Route path="/admin" element={<Admin user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
Modal.setAppElement("#root");

export default App;
