
import React, { useState } from 'react';
import "./pageSelector.css"
import { useNavigate } from 'react-router-dom';

const pages = ['Page 1', 'Page 2', 'Page 3','page 4'];

const PageSelector = ({ selectedPages, setSelectedPages }) => {
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages);
    }
    setSelectAll(!selectAll);
  };

  const handlePageChange = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleSubmit = () => {
    navigate('/selected');
  };

  return (
    <div className='form-back'>
     <div className="form-container">
     <div className='selectAllContainer'>
        <span>All pages</span>
        <input className='check' type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
      </div>
      {pages.map((page) => (
        <div key={page} className='pageContainer'>
        <span>{page}</span>
          <input
            className='check'
            type="checkbox"
            checked={selectedPages.includes(page)}
            onChange={() => handlePageChange(page)}
          />
        </div>
      ))}
      <div className="button-box"></div>
      <button className='button' onClick={handleSubmit}>Done</button>
    </div>
    </div>
  );
};

export default PageSelector;
