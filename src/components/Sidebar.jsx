import React from 'react';
import { Link } from "react-router-dom";


// Inside Sidebar.js
export default function Sidebar({ activePage, pages }) {
  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <Link to={page} key={index} className={activePage === page ? 'active' : ''}>
          {getPageName(page)}
        </Link>
      ))}
    </div>
  );
}

function getPageName(page) {
  // Extract the name from the URL (e.g., "/new-form" becomes "New Form")
  return page.split('-').slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
