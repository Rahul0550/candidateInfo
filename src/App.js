
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import NewForm from "./components/NewForm";
import DetailsCollection from "./components/DetailsCollection";
import DocumentCollection from "./components/DocumentCollection";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Sidebar */}
        <div className="sidebar">
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




        <div className="main-content">
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
