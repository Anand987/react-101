import React, { useState } from "react";

// Importing forms step components
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";
import LocationInfo from "./LocationInfo";

// Importing CSS
import "./MultiForm.css";

export const MultiForm = () => {
  const [values, setValues] = useState({
    // Personal Information ----------
    first_name: "",
    last_name: "",
    gender: "",
    // Contact Information ----------
    email: "",
    phone_number: "",
    // Location Information ----------
    city: "",
    state: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="step-card">
        {
          {
            1: <PersonalInfo handleChange={handleChange} />,
            2: <ContactInfo handleChange={handleChange} />,
            3: <LocationInfo handleChange={handleChange} />,
          }[step]
        }
        <div className="d-flex justify-content-around px-5 mt-5">
          {step > 1 ? (
            <button className="btn btn-warning" onClick={prevStep}>
              Back
            </button>
          ) : null}
          <button className="btn btn-warning" onClick={nextStep}>
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
