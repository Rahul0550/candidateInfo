// App.js

import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import NewForm from "./components/NewForm";
import DetailsCollection from "./components/DetailsCollection";
import DocumentCollection from "./components/DocumentCollection";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "200px", background: "#f0f0f0", padding: "10px" }}>
          <Link to="/new-form">NewForm</Link>
          <br />
          <Link to="/details-collection">Details Collection</Link>
          <br />
          <Link to="/document-collection">Document Collection</Link>
          <br />
          <Link to="/statement-of-purpose">Statement of Purpose</Link>
          <br />
          <Link to="/interview-availability">Interview Availability</Link>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/new-form" element={<NewForm />} />
            <Route path="/details-collection" element={<DetailsCollection />} />
            <Route
              path="/document-collection"
              element={<DocumentCollection />}
            />
            <Route
              path="/statement-of-purpose"
              element={<StatementOfPurpose />}
            />
            <Route
              path="/interview-availability"
              element={<InterviewAvailability />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
