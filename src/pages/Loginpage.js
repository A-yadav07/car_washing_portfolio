// Register.js
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    setMessage("Registration successful!");

    setFormData({
        name: "",
        email: "",
        password: ""
      });
      
    // Here you can add code to send formData to a server or API endpoint
  };

  // const handleshowlogin = () => {
  //     setIsHovered(isHovered?true:false);
  //   };

  return (
    <>
      {" "}
      <div>
        <button className="button2" onClick={() => setIsHovered(!isHovered)}>
          Click Me For Register !
        </button>
      </div>
      <div
        className="registerform"
        style={{ display: isHovered ? "flex" : "none" }}
      >
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="registertxt">
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <br />
          </div>
          <div className="registertxt">
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <br />
          </div>
          <div className="registertxt">
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <br />
          </div>
          <button type="submit" className="registerbutton">
            Register
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Register;
