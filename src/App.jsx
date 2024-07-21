import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageSelector from './components/pageSelector/PageSelector';
import SelectedPages from './components/selectedPages/SelectedPages';



const pagesData = [
  { id: 'page1', title: 'Page 1', content: 'This is the content of Page 1' },
  { id: 'page2', title: 'Page 2', content: 'This is the content of Page 2' },
  { id: 'page3', title: 'Page 3', content: 'This is the content of Page 3' },
  { id: 'page4', title: 'Page 4', content: 'This is the content of Page 4' },
];

const App = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<PageSelector selectedPages={selectedPages} setSelectedPages={setSelectedPages} pages={pagesData} />}
          />
          <Route
            path="/selected"
            element={<SelectedPages selectedPages={selectedPages} pages={pagesData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;