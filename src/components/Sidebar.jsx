import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ activePage, pages, onPageChange }) {
  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <Link
          to={page}
          key={index}
          className={activePage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
          title={getPageName(page).description}
        >
          {getPageName(page).label}
        </Link>
      ))}
    </div>
  );
}

function getPageName(page) {
  const formattedName = page
    .split('/')
    .slice(-1)[0]
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const labelsMap = {
    'details-collection': { label: 'Details Collection', description: 'Collect information from candidates on their education, work experience, contact no, etc' },
    'document-collection': { label: 'Document Collection', description: 'Save time and efforts: Explore this template to find a set of questions required for document collection' },
    'statement-of-purpose': { label: 'Statement Of Purpose', description: 'Start creating a new form with the wide options of fields available' },
    'interview-availability': { label: 'Interview Availability', description: 'Start creating a new form with the wide options of fields available' },
  };

  return labelsMap[page.slice(1)] || { label: formattedName, description: 'No description available' };
}


