import React from 'react';
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
<div className="sidebar">
      <Link to="/new-form">NewForm</Link>
      <Link to="/details-collection">Details Collection</Link>
      <Link to="/document-collection">Document Collection</Link>
      <Link to="/statement-of-purpose">Statement of Purpose</Link>
      <Link to="/interview-availability">Interview Availability</Link>
    </div>
    )
}
