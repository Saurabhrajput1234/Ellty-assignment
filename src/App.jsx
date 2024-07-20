import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageSelector from './components/pageSelector/PageSelector';
import SelectedPages from './components/open/SelectedPages';


const App = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PageSelector selectedPages={selectedPages} setSelectedPages={setSelectedPages} />} />
          <Route path="/selected" element={<SelectedPages selectedPages={selectedPages} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
