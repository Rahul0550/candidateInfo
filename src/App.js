import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewForm from "./components/NewForm";
import DetailsCollection from "./components/DetailsCollection";
import DocumentCollection from "./components/DocumentCollection";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [name, setName] = useState('');

  return (

    <BrowserRouter>
      <div style={{ backgroundColor: "cyan",height:"50px" }}>
        <h3>Stepper</h3>
      </div>

      <div className="app-container">
        <Sidebar />

        <div className="main-content">

          <div className="inside-header">
          <h2 >
              {name ? `Enquiry Form for- ${name}` : "Set Name of the enquiry form"}
            </h2>
          </div>

          <div className="space-between-container">
            <div className="main-content">

              <Routes>
                <Route path="/new-form" element={<NewForm setName={setName} />} />
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
          
        </div>
      </div>
      <button
        style={{
          color: "blue",
          backgroundColor: "Red",
          width: "300px",
          margin: "0 40%",
        }}
      >
        Next
      </button>
    </BrowserRouter>
  );
};

export default App;
