import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, database, productsCollection } from "../firebase/firebase"; // Replace with your Firebase configuration

const cartContext = createContext();

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  console.log(data);
  useEffect(() => {
    const getData = auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const userDocRef = doc(database, "users", user.uid);
        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setShippingAddress({
              streetAddress: userData.streetAddress || "",
              city: userData.city || "",
              state: userData.state || "",
              zipCode: userData.zipCode || "",
              phoneNumber: userData.phoneNumber || "",
            });
            const userCart = userData.cart || [];
            console.log(userCart);
            setProducts(userCart);
          }
          onSnapshot(productsCollection, (collection) => {
            const firebaseDocData = collection.docs.map((doc) => {
              return doc.data();
            });
            setData(firebaseDocData);
            console.log(firebaseDocData);
            setLoading(false);
          });
        } catch (error) {
          console.error("Error loading data from Firestore:", error);
        }
      } else {
        setUser(null);
        setProducts([]);
        setShippingAddress({
          streetAddress: "",
          city: "",
          state: "",
          zipCode: "",
          phoneNumber: "",
        });
      }
    });
    return () => getData();
  }, []);

  console.log(data);

  const calculateTotalPrice = () => {
    let total = 0;
    if (products.length > 0) {
      for (const product of products) {
        total += product.price * product.quantity;
      }
      return total;
    }
    return total;
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    if (products.length > 0) {
      for (const product of products) {
        totalQuantity += product.quantity;
      }
      return totalQuantity;
    }
    return totalQuantity;
  };

  const addProduct = (product) => {
    const existingProductIndex = products.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += 1;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (productToRemove) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productToRemove.id
    );
    console.log("hello");
    setProducts(updatedProducts);
  };

  const decreaseProduct = (productToDecrease) => {
    const updatedProducts = [...products];
    const existingProductIndex = updatedProducts.findIndex(
      (p) => p.id === productToDecrease.id
    );

    if (existingProductIndex !== -1) {
      if (updatedProducts[existingProductIndex].quantity > 1) {
        updatedProducts[existingProductIndex].quantity -= 1;
        setProducts(updatedProducts);
      } else {
        removeProduct(productToDecrease);
      }
    }
  };
  useEffect(() => {
    const updateData = async () => {
      if (user) {
        setLoading(true);
        const userDocRef = doc(database, "users", user.uid);
        const dataToUpdate = {
          cart: products,
          streetAddress: shippingAddress.streetAddress,
          city: shippingAddress.city,
          state: shippingAddress.state,
          zipCode: shippingAddress.zipCode,
          phoneNumber: shippingAddress.phoneNumber,
          updatedAt: serverTimestamp(),
        };

        setDoc(userDocRef, dataToUpdate, { merge: true })
          .then(() => {
            console.log("Cart and shipping address saved to Firestore");
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error saving data to Firestore:", error);
          });
      }
    };

    updateData();
  }, [products, shippingAddress]);

  return (
    <cartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        decreaseProduct,
        calculateTotalPrice,
        calculateTotalQuantity,
        loading,
        data,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  return context;
};
