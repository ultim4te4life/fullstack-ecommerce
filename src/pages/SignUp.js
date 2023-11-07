import React, { useState } from "react";
import * as Yup from "yup";
import "../SignUpPage.css";
import { useNavigate } from "react-router-dom";
import { auth, usersCollection } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password must match")
    .required("Password is required"),
  age: Yup.number()
    .min(18, "Age must be at least 18 years old")
    .required("Age is required"),
  termsAndConditions: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

function SignUpPage(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: 0,
    termsAndConditions: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    termsAndConditions: "",
    required: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    Yup.reach(validationSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "Must match with the password",
      });
    } else if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.password === "" ||
      formValues.confirmPassword === ""
    ) {
      setFormErrors({ ...formErrors, required: "All inputs must be required" });
    } else if (Object.values(formErrors).some((error) => error !== "")) {
      setFormErrors({ ...formErrors, required: "All error must be cleared" });
    } else {
      setFormErrors({ ...formErrors, required: "" });
      await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )
        .then((response) => {
          const userId = response.user.uid;
          addDoc(usersCollection, {
            userId: userId,
            name: formValues.name,
            email: formValues.email,
            age: formValues.age,
            password: formValues.password,
            role: "",
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setFormErrors({ ...formErrors, required: error.message });
        });
    }
  };

  return (
    <div>
      <Header user={props.user} darkMode={false} />
      <div className="login-container">
        <div className="login-content">
          <div className="login-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/af58/1e30/a69b2f1d473257bb6a167716e3d47fca?Expires=1699833600&Signature=elMsHy9OTunhiRgPhJ6NDAJknltOgj9gVxFFRumDxU1cqfseY5~FqKFu-p4sM4RK7H~hddusiaH4nW-T-AEMJt7KX7yVzVTvNPJhQ2Bo86cniRb~i59M8IhtMtJzHrA2f4Hq1P1zgNkjG96zh62yUenqSG-Sc9OGZZV~Ti5BzHyCHtHA76Rz1j60brcOH55HsYKgmjVxjoVpGtdQTs9njyATr0PsgyjywX7M8qojXno2eqWHi3voap7-WGEC5-9ENni5XhUoNsKJJvIGPbiI5VWa7rHCbNK9vuNgUlNAmC4joyIY1tlRiaRVScOBhkvqy4yLG-TdbLDnp9JFr2Dfuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Login Image"
            />
          </div>
          <div className="signup-container">
            <h1>Sign-Up Page</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  value={formValues.name}
                />
                <div className="error-message">
                  {formErrors.name && (
                    <span className="red-text">{formErrors.name}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                />
                <div className="error-message">
                  {formErrors.name && (
                    <span className="red-text">{formErrors.email}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formValues.password}
                />
                <div className="error-message">
                  {formErrors.name && (
                    <span className="red-text">{formErrors.password}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  onChange={handleChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formValues.confirmPassword}
                />
                <div className="error-message">
                  {formErrors.name && (
                    <span className="red-text">
                      {formErrors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  name="age"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter your name"
                  value={formValues.age}
                />
                <div className="error-message">
                  {formErrors.name && (
                    <span className="red-text">{formErrors.age}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="termsAndConditions"
                    checked={formValues.termsAndConditions}
                    onChange={handleChange}
                  />
                  I agree to the terms and conditions
                </label>
                <div className="error-message">
                  {formErrors.termsAndConditions && (
                    <span className="red-text">
                      {formErrors.termsAndConditions}
                    </span>
                  )}
                </div>
              </div>
              <button type="submit">Sign Up</button>
              <button onClick={() => navigate("/sign-in")}>
                Go Back to Sign-in
              </button>

              <h3
                style={{
                  color: "red",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {formErrors.required}
              </h3>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
