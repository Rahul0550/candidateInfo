import React, { useState } from "react";

export default function InterviewAvailability() {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  var aryIanaTimeZones = Intl.supportedValuesOf("timeZone");

  const languageOptions = [
    "Hindi",
    "English",
    "Spanish",
    "French",
    "German",
    "Russian",
  ];

  return (
    <>
      {/* <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div> */}
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
          <select
            value={selectedTimeZone}
            onChange={(e) => setSelectedTimeZone(e.target.value)}
          >
            <option value="" disabled>
              Select a timezone
            </option>
            {aryIanaTimeZones.map((timeZone) => (
              <option key={timeZone} value={timeZone}>
                {timeZone}
              </option>
            ))}
          </select>
          <br />
        </div>

        <div className="form-group">
          <label>6. Interview Medium</label>
          <br />
          <select>
            <option value="" disabled selected>
              Search or Select medium of Interview from below
            </option>
            {languageOptions.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
          <br />
        </div>
        
      </div>
    </>
  );
}
