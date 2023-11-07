import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../SignUpPage.css";
import { auth } from "../firebase/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../loginpage.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState(null);

  const navigate = useNavigate();

  const validateForm = async () => {
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false }
      );
      setValidationErrors({});
      return true;
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = await validateForm();

    if (!isFormValid) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setFirebaseError(null);
      navigate("/");
    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
      setValidationErrors({});
      setFirebaseError(null);
    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  return (
    <div>
      <Header user={props.user} darkMode={true} />

      <div className="login-container">
        <div className="login-content">
          <div className="login-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/af58/1e30/a69b2f1d473257bb6a167716e3d47fca?Expires=1699833600&Signature=elMsHy9OTunhiRgPhJ6NDAJknltOgj9gVxFFRumDxU1cqfseY5~FqKFu-p4sM4RK7H~hddusiaH4nW-T-AEMJt7KX7yVzVTvNPJhQ2Bo86cniRb~i59M8IhtMtJzHrA2f4Hq1P1zgNkjG96zh62yUenqSG-Sc9OGZZV~Ti5BzHyCHtHA76Rz1j60brcOH55HsYKgmjVxjoVpGtdQTs9njyATr0PsgyjywX7M8qojXno2eqWHi3voap7-WGEC5-9ENni5XhUoNsKJJvIGPbiI5VWa7rHCbNK9vuNgUlNAmC4joyIY1tlRiaRVScOBhkvqy4yLG-TdbLDnp9JFr2Dfuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Login Image"
            />
          </div>
          <div className="login-form">
            <h1>Sign-In Page</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {validationErrors.email && (
                  <p style={{ color: "red" }}>{validationErrors.email}</p>
                )}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {validationErrors.password && (
                  <p style={{ color: "red" }}>{validationErrors.password}</p>
                )}
              </div>
              {firebaseError && (
                <p style={{ color: "red" }} className="error">
                  {firebaseError}
                </p>
              )}
              <button type="submit">Login</button>
              <button onClick={() => navigate("/sign-up")}>
                Create New Account
              </button>
              <button onClick={() => navigate("/")}>Go Back to Home</button>
              <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
