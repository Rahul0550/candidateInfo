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
  const [activePage, setActivePage] = useState('/new-form');
  
  const pages = [
    '/new-form',
    '/details-collection',
    '/document-collection',
    '/statement-of-purpose',
    '/interview-availability',
  ];

  const handleNextClick = () => {
    const currentIndex = pages.indexOf(activePage);
    const nextIndex = currentIndex < pages.length - 1 ? currentIndex + 1 : currentIndex;
    setActivePage(pages[nextIndex]);
  };

  const handlePreviousClick = () => {
    const currentIndex = pages.indexOf(activePage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setActivePage(pages[prevIndex]);
  };

  return (

    <BrowserRouter>
      <div style={{ backgroundColor: "cyan",height:"50px" }}>
        <h3>Stepper</h3>
      </div>

      <div className="app-container">
        <Sidebar activePage={activePage} pages={pages} />

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
      <div className="button-container">
        <button
          style={{
            color: "blue",
            backgroundColor: "Red",
            width: "150px",
            marginRight: "20px",
          }}
          onClick={handlePreviousClick}
          disabled={pages.indexOf(activePage) === 0}
        >
          Previous
        </button>
        <button
          style={{
            color: "blue",
            backgroundColor: "Red",
            width: "150px",
          }}
          onClick={handleNextClick}
          disabled={pages.indexOf(activePage) === pages.length - 1}
        >
          Next
        </button>
      </div>
    </BrowserRouter>
  );
};

export default App;
