// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HomePage.css';
import { FaPlusCircle, FaBell, FaMapMarkerAlt } from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="home-page">
      {/* Background and Navbar */}
      <div className="background">
        <nav className="navbar">
          <h1 className="logo">Findly</h1>
          <div className="nav-icons">
            <FaBell className="icon" />
            <FaMapMarkerAlt className="icon" />
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <h2 className="title">Easily Track Lost and Found Items</h2>
          <div className="action-buttons">
            <button onClick={() => handleNavigate('/report-lost-item')} className="report-button lost">
              Report Lost Item
            </button>
            <button onClick={() => handleNavigate('/report-found-item')} className="report-button found">
              Report Found Item
            </button>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li>
                <button onClick={() => handleNavigate('/found-items')} className="nav-button">
                  Found Items
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/user-profile')} className="nav-button">
                  Your Profile
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
