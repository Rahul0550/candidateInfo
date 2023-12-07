import React from "react";

export default function DetailsCollection() {
  return (
    <>
      {/* <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div> */}
      <div className="form-container">

        <div className="form-group">
          <label>1. Name*</label>
          <br />
          <input type="text" placeholder="Enter Name" required />
        </div>

        <div className="form-group">
          <label>2. Email*</label>
          <br />
          <input
            type="email"
            placeholder="Example - userid@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label>3. Date of Birth*</label>
          <br />
          <input type="date" placeholder="DD/MM/YYY" required />
        </div>
        
        <div className="form-group">
          <label>4. Contact No*</label>
          <br />
          <input
            type="number"
            placeholder="Enter your 10 digit contact no"
            pattern="[1-9]{1}[0-9]{9}"
            required
          />
        </div>
      </div>
    </>
  );
}
