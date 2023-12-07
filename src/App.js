import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NewForm from "./components/NewForm";
import DetailsCollection from "./components/DetailsCollection";
import DocumentCollection from "./components/DocumentCollection";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  
  const [activePage, setActivePage] = useState("/new-form");

  const [nextButtonLabel, setNextButtonLabel] = useState('Next');


  const pages = [
    "/new-form",
    "/details-collection",
    "/document-collection",
    "/statement-of-purpose",
    "/interview-availability",
  ];

  const pageComponents = {
    "/new-form": <NewForm/>,
    "/details-collection": <DetailsCollection />,
    "/document-collection": <DocumentCollection />,
    "/statement-of-purpose": <StatementOfPurpose />,
    "/interview-availability": <InterviewAvailability />,
  };

  const handleNextClick = () => {
    const currentIndex = pages.indexOf(activePage);
    const nextIndex = currentIndex < pages.length - 1 ? currentIndex + 1 : currentIndex;
    const nextPage = pages[nextIndex];
  
    const nextButtonLabel = nextPage === '/interview-availability' ? 'Submit' : 'Next';
  
    setActivePage(nextPage);
    setNextButtonLabel(nextButtonLabel);
  };

  const handlePreviousClick = () => {
    const currentIndex = pages.indexOf(activePage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setActivePage(pages[prevIndex]);
  };

  const handleSidebarClick = (page) => {
    setActivePage(page);
  };

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#b3d8f4",
          height: "50px",
          marginTop: "0px",
          display: "inherit",
          boxShadow: "-6px 0px 9px 3px grey",
        }}
      >
        <div className="heading-main">
          <div className="heading-child">
            <div className="input-field">
              <input type="checkbox" checked className="checkbox-round" />
              <h4>Form Selection</h4> ---------
              <input type="checkbox" className="checkbox-round" />
              <h4>Set up</h4>---------
              <input type="checkbox" className="checkbox-round" />
              <h4>Form Creation</h4>---------
              <input type="checkbox" className="checkbox-round" />
              <h4>Review</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container-outer">
        <div className="app-container">
          <Sidebar
            activePage={activePage}
            pages={pages}
            onPageChange={handleSidebarClick}
          />

          <div className="main-content">
          <h1>Preview</h1>
          <p>You will be able to change the fields in the later stage</p>
            <div className="inside-header">
              <h2>
                Name of the Enquiry Form
              </h2>
              <br/>
              <p>One line description</p>
              <br/>
              <br/>
              <p>Provide the following information to process your application</p>
            </div>

            <div className="space-between-container">
              <div className="main-content inner-box">
                {pageComponents[activePage]}
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            style={{
              color: "white",
              backgroundColor: "#1a8fe6",
              width: "150px",
              height: "47px",
              margin: "0px 20px 10px 20px",
              borderRadius: "10px",
            }}
            onClick={handlePreviousClick}
            disabled={pages.indexOf(activePage) === 0}
          >
            Previous
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "#1a8fe6",
              width: "150px",
              height: "47px",
              margin: "0px 20px 10px 20px",
              borderRadius: "10px",
            }}
            onClick={handleNextClick}
            disabled={pages.indexOf(activePage) === pages.length - 1}
          >
            {nextButtonLabel}
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
