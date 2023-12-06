import React from "react";

export default function InterviewAvailability() {
  return (
    <>
      <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div>
      <div>
        <div className="form-group">
          <label>1. Email*</label>
          <br />
          <input
            type="email"
            placeholder="Example - userid@gmail.com"
            required
          />
          <br />
        </div>

        <div className="form-group">
          <label>2. Location</label>
          <br />
          <input type="location" placeholder="Search or enter your location" />
          <br />
        </div>

        <div className="form-group">
          <label>3. Interview Date</label>
          <br />
          <input type="date" placeholder="DD/MM/YYY" />
          <br />
        </div>

        <div className="form-group">
          <label>4. Interview Time</label>
          <br />
          <input type="time" placeholder="12:00" />
          <br />
        </div>

        <div className="form-group">
          <label>5. Time Zone</label>
          <br />
          <input
            type="dropdown"
            placeholder="Search or Select a timezone from below"
          />
          <br />
        </div>

        <div className="form-group">
          <label>6. Interview Medium</label>
          <br />
          <input
            type="dropdown"
            placeholder="Search or Select medium of Interview from below"
          />
          <br />
        </div>
      </div>
    </>
  );
}
