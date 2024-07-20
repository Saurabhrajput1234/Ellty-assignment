import React from 'react';
import { Link } from 'react-router-dom';

const SelectedPages = ({ selectedPages }) => {
  return (
    <div>
      <h1>Selected Pages</h1>
      {selectedPages.length > 0 ? (
        selectedPages.map((page, index) => <div key={index}>{page}</div>)
      ) : (
        <div>No pages selected</div>
      )}
      <Link to="/">Back to selection</Link>
    </div>
  );
};

export default SelectedPages;