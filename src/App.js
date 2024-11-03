// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReportLostItem from './components/ReportLostItem'; // Ensure you have this component
import ReportFoundItem from './components/ReportFoundItem'; // Import the new component
import FoundItems from './components/FoundItems'; // Adjust the import based on your file structure
import Profile from './components/Profile'; // Adjust the import based on your file structure
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report-lost" element={<ReportLostItem />} />
        <Route path="/report-found" element={<ReportFoundItem />} /> {/* Add route for report found */}
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
