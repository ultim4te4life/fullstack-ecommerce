import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Modal from "react-modal";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { database } from "../firebase/firebase";

function Admin(props) {
  const { data, addProduct } = useCartContext();
  const [localProducts, setLocalProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    imageUrl: "",
    category: "",
    description: "",
    price: 0,
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const productsSnapshot = await getDocs(collection(database, "products"));
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLocalProducts(productsData);
    } catch (error) {
      console.error("Error fetching products from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditProduct = (product) => {
    setEditedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setEditedProduct(product);
    setIsDeleteModalOpen(true);
  };
  const handleEditProductSubmit = async (e) => {
    e.preventDefault();
    if (editedProduct) {
      try {
        const productDocRef = doc(database, "products", editedProduct.id);
        await setDoc(productDocRef, editedProduct);
        setIsEditModalOpen(false);

        // Reload the page to show updated data
        window.location.reload();
      } catch (error) {
        console.error("Error updating product data in Firestore:", error);
      }
    }
  };

  const handleConfirmDelete = async () => {
    if (editedProduct) {
      try {
        // Delete the product from Firestore
        console.log("Deleting product from Firestore", editedProduct);
        const productDocRef = doc(
          database,
          "products",
          editedProduct.id.toString()
        );
        await deleteDoc(productDocRef);

        // Update the local state to remove the deleted product
        const updatedProducts = localProducts.filter(
          (product) => product.id !== editedProduct.id
        );
        console.log("Updated products in local state", updatedProducts);
        setLocalProducts(updatedProducts);
        setIsDeleteModalOpen(false);
      } catch (error) {
        console.error("Error deleting product from Firestore:", error);
      }
    } else {
      console.error("editedProduct is undefined or null");
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = { ...newProduct };
      const productDocRef = doc(collection(database, "products"));
      await setDoc(productDocRef, productData);
      setLocalProducts([
        ...localProducts,
        { id: productDocRef.id, ...productData },
      ]);
      setNewProduct({
        name: "",
        imageUrl: "",
        category: "",
        description: "",
        price: 0,
      });
    } catch (error) {
      console.error("Error adding a new product to Firestore:", error);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    section: {
      flex: 1,
      padding: "20px",
      backgroundColor: "#f5f5f5",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableCell: {
      border: "1px solid #ddd", // Add a border to the table cells
      padding: "8px",
      textAlign: "left",
    },
    productRowStyle: {
      marginBottom: "10px",
    },
    imageStyle: {
      width: "50px",
      height: "auto",
      display: "flex",
      justifyContent: "center",
    },
    modalStyle: {
      content: {
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    addButton: {
      backgroundColor: "#3858D6",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
    },
    editButton: {
      backgroundColor: "#35D6AC",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    deleteButton: {
      backgroundColor: "#D63535",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div>
      <Header user={props.user} />
      <div style={styles.container}>
        <div style={styles.section}>
          <h1>Product Management</h1>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableCell}>Name</th>
                <th style={styles.tableCell}>Image</th>
                <th style={styles.tableCell}>Category</th>
                <th style={styles.tableCell}>Description</th>
                <th style={styles.tableCell}>Price</th>
                <th style={styles.tableCell}>Action</th>
              </tr>
            </thead>
            <tbody style={styles.productRowStyle}>
              {localProducts.map((product) => (
                <tr key={product.id}>
                  <td style={styles.tableCell}>{product.name}</td>
                  <td style={styles.tableCell}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={styles.imageStyle}
                    />
                  </td>
                  <td style={styles.tableCell}>{product.category}</td>
                  <td style={styles.tableCell}>{product.description}</td>
                  <td style={styles.tableCell}>${product.price}</td>
                  <td style={styles.tableCell}>
                    <button
                      style={styles.editButton}
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      style={styles.deleteButton}
                      onClick={() => handleDeleteProduct(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.section}>
          <h1>Add Product</h1>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: parseFloat(e.target.value),
                })
              }
            />
            <button style={styles.addButton} type="submit">
              Add
            </button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        style={styles.modalStyle}
      >
        <h2>Edit Product</h2>
        {editedProduct && (
          <form onSubmit={handleEditProductSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={editedProduct.category}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  category: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={editedProduct.description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  description: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={editedProduct.imageUrl}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, imageUrl: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  price: parseFloat(e.target.value),
                })
              }
            />
            <button style={styles.addButton} type="submit">
              Save
            </button>
          </form>
        )}
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        style={styles.modalStyle}
      >
        <h2>Delete Product</h2>
        {editedProduct && (
          <div>
            <p>Are you sure you want to delete the product:</p>
            <p>Name: {editedProduct.name}</p>
            <p>
              <img
                src={editedProduct.imageUrl}
                alt={editedProduct.name}
                style={styles.imageStyle}
              />
            </p>
            <p>Category: {editedProduct.category}</p>
            <p>Description: {editedProduct.description}</p>
            <p>Price: ${editedProduct.price}</p>
            <button style={styles.deleteButton} onClick={handleConfirmDelete}>
              Yes, Delete
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Admin;
