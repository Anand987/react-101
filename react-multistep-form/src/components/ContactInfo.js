import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange("email")}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="tel"
          name="phone_number"
          id="phone_number"
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
        />
        {/* <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
          name="phone_number"
        /> */}
      </Form.Group>
    </div>
  );
};

export default ContactInfo;
