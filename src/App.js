import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import Advertising from './pages/Advertising';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wallet" element={<Courses />} />
          <Route path="/advertising" element={<Advertising />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;