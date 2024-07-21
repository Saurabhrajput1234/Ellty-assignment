import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './pageSelector.css';
import { useNavigate } from 'react-router-dom';

const PageSelector = ({ selectedPages, setSelectedPages, pages }) => {
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    $("#popup").fadeIn().delay(2000).fadeOut();
  }, []);

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
     <div id="popup">
          First select any page and click on the submit button. It will redirect you to the selected page.
        </div>
      <div className="form-container">
        <div className='selector' style={{"paddingInline":"6px"}}>
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
        </div>
        <div className="button-box">
          <button className='button' onClick={handleSubmit}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
