import React, { useState } from "react";

export default function InterviewAvailability() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [selectedMedium, setSelectedMedium] = useState("");

  var aryIanaTimeZones = Intl.supportedValuesOf("timeZone");

  const languageOptions = [
    "Hindi",
    "English",
    "Spanish",
    "French",
    "German",
    "Russian",
  ];

  // Function to handle form submission
  const handleSubmit = (el) => {
    el.preventDefault();

    console.log({
      email,
      location,
      interviewDate,
      interviewTime,
      selectedTimeZone,
      selectedMedium,
    });

  };

  return (
    <>
    {/* <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div> */}
      <div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>1. Email*</label>
            <br />
            <input
              type="email"
              placeholder="Example - userid@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
          </div>

          <div className="form-group">
            <label>2. Location</label>
            <br />
            <input
              type="location"
              placeholder="Search or enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
          </div>

          <div className="form-group">
            <label>3. Interview Date</label>
            <br />
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
            />
            <br />
          </div>

          <div className="form-group">
            <label>4. Interview Time</label>
            <br />
            <input
              type="time"
              placeholder="12:00"
              value={interviewTime}
              onChange={(e) => setInterviewTime(e.target.value)}
            />
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
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
            >
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

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
