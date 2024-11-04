// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage'; // Assuming you have this
import ReportLostItem from './components/ReportLostItem'; // Import the component
import ReportFoundItem from './components/ReportFoundItem'; // Import the component
import FoundItems from './components/FoundItems'; // Import the component
import UserProfile from './components/UserProfile'; // Import the component
import './App.css'; // Your global CSS

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Update the login state
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/report-lost-item" element={<ReportLostItem />} />
        <Route path="/report-found-item" element={<ReportFoundItem />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/user-profile" element={<UserProfile />} />
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
