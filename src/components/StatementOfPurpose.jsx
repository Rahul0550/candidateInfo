import React, { useState } from "react";

export default function StatementOfPurpose() {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const handleInputChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  return (
    <>
      {/* <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div> */}
      <div>
        <div className="form-group">
          <label>
            1. Tell me about a time you were asked to do something you had never
            done before. How did you react? What did you learn?
          </label>
          <br />
          <textarea
            value={answers.question1}
            onChange={(e) => handleInputChange("question1", e.target.value)}
            placeholder="Enter a description for the long answer"
            style={{ width: "600px", height: "100px" }}
          />
          <br />
        </div>

        <div className="form-group">
          <label>
            2. Tell me about the last time something significant didn't go
            according to plan at work. What was your role? What was the outcome?
          </label>
          <br />
          <textarea
            value={answers.question2}
            onChange={(e) => handleInputChange("question2", e.target.value)}
            placeholder="Enter a description for the long answer"
            style={{ width: "600px", height: "100px" }}
          />
          <br />
        </div>

        <div className="form-group">
          <label>
            3. What are the three things that are most important to you in a job?
          </label>
          <br />
          <textarea
            value={answers.question3}
            onChange={(e) => handleInputChange("question3", e.target.value)}
            placeholder="Enter a description for the long answer"
            style={{ width: "600px", height: "100px" }}
          />
        </div>
      </div>

    </>
  );
}
