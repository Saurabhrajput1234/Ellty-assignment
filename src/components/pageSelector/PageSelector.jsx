import React, { useState } from 'react';
import './pageSelector.css';
import { useNavigate } from 'react-router-dom';

const PageSelector = ({ selectedPages, setSelectedPages, pages }) => {
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages.map(page => page.id));
    }
    setSelectAll(!selectAll);
  };

  const handlePageChange = (pageId) => {
    if (selectedPages.includes(pageId)) {
      setSelectedPages(selectedPages.filter((id) => id !== pageId));
    } else {
      setSelectedPages([...selectedPages, pageId]);
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
          <div key={page.id} className='pageContainer'>
            <span>{page.title}</span>
            <input
              className='check'
              type="checkbox"
              checked={selectedPages.includes(page.id)}
              onChange={() => handlePageChange(page.id)}
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