import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myimage from "./Assets/images.png";
import toast, { Toaster } from "react-hot-toast";
import "./Components/App.css";

const Page1 = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUs((prev) => ({ ...prev, [name]: value }));
  };
  const successMessage = () => {
    toast.success("Successfully sent!");
  };
  const errorMessage = () => {
    toast.error("Error while sending message");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactUs)
    })
      .then((response) => {
        if (response.ok) {
          successMessage();
          setContactUs({
            name: "",
            company: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          navigate("/page2");
        } else {
          errorMessage();
        }
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1 className="brand">
        <span>Feedback Form</span>
      </h1>
      <div className="wrapper">
        <div className="company-info">
          <h3>Phoenix Web Design</h3>
          <img src={myimage} className="img1" alt="company logo" />
        </div>
        <div className="contact">
          <h3>E-mail Us</h3>
          <form id="contact-form">
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" value={contactUs.name} onChange={handleChange} required />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" value={contactUs.company} onChange={handleChange} required />
            </p>
            <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="email" value={contactUs.email} onChange={handleChange} required />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" id="phone" value={contactUs.phoneNumber} onChange={handleChange} required />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message" value={contactUs.message} onChange={handleChange} required />
            </p>
            <p className="full">
              <button type="submit" onClick={handleSubmit}>Next</button>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Page1;
