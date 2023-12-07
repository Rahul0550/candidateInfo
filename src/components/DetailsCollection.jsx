import React, { useState } from "react";

export default function DetailsCollection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    contactNo: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormSubmitted(true);
  };

  return (
    <>
    {/* <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div> */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>1. Name*</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>2. Email*</label>
            <br />
            <input
              type="email"
              placeholder="Example - userid@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>3. Date of Birth*</label>
            <br />
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>4. Contact No*</label>
            <br />
            <input
              type="number"
              placeholder="Enter your 10-digit contact no"
              pattern="[1-9]{1}[0-9]{9}"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              required
            />
          </div>

          <input type="submit">Submit</input>
        </form>

        {formSubmitted && <p>Form submitted successfully!</p>}
      </div>
    </>
  );
}
