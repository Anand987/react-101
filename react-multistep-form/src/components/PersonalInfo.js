import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Personal Info</h2>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          onChange={handleChange("first_name")}
        />
        {/* <Form.Control
          placeholder="First Name"
          onChange={handleChange("first_name")}
          name="first_name"
        /> */}
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <input
          className="c-imput"
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          onChange={handleChange("last_name")}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
        {/* <select
          className=""
          style={{ width: "100%" }}
          name="gender"
          id="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
      </Form.Group>
    </div>
  );
};

export default PersonalInfo;
