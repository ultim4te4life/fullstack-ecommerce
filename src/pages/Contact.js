import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Contact.css"; // Import your custom CSS file for this component

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <div className="contact-container">
      <Header user={props.user} />
      <div className="contact-content">
        <div className="contact-image">
          {/* You can replace this with your contact-related image */}
          <img
            src="https://cdn.pixabay.com/photo/2021/12/28/13/20/smartphone-6899216_1280.png"
            alt="Contact Us"
          />
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer user={props.user} />
    </div>
  );
}

export default Contact;
