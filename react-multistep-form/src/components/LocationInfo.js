import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Location Info</h2>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="text"
          name="state"
          id="state"
          placeholder="State"
          onChange={handleChange("state")}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={handleChange("city")}
        />
      </Form.Group>
    </div>
  );
};

export default LocationInfo;
