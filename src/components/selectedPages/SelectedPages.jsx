import React from 'react';
import { Link } from 'react-router-dom';
import './selectedPages.css';

const SelectedPages = ({ selectedPages, pages }) => {
  const selectedPagesData = pages.filter(page => selectedPages.includes(page.id));

  return (
    <div>
      <h1>Selected Pages</h1>
      {selectedPagesData.length > 0 ? (
        selectedPagesData.map((page) => (
          <div key={page.id} className='page-card'>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </div>
        ))
      ) : (
        <div>No pages selected</div>
      )}
      <Link to="/">Back to selection</Link>
    </div>
  );
};

export default SelectedPages;