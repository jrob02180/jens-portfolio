import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!setMessage) {
      setErrorMessage("This field is required");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
      <div>
        <div>
          <h2>Contact</h2>
        </div>
        <form className="form">
          <div>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleInputChange}
              placeholder="Name"
            />
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <br></br>
            <label htmlFor="message">Message:</label>
            <br></br>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
            <br></br>
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          </form>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
      </div>
    );
}

export default Contact;
