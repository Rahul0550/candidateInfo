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
        >
          {getPageName(page)}
        </Link>
      ))}
    </div>
  );
}

function getPageName(page) {
  const formattedName = page
    .split('-')
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const labelsMap = {
    'details-collection': 'Details Collection',
    'document-collection': 'Document Collection',
    'statement-of-purpose': 'Statement Of Purpose',
    'interview-availability': 'Interview Availability',
  };

  return labelsMap[page.slice(1)] || formattedName;
}
