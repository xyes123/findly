// src/components/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { FaPlusCircle, FaBell, FaMapMarkerAlt } from 'react-icons/fa';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
            <button onClick={() => openModal('lost')} className="report-button lost">
              Report Lost Item
            </button>
            <button onClick={() => openModal('found')} className="report-button found">
              Report Found Item
            </button>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li><Link to="/report-lost">Report Lost Item</Link></li>
              <li><Link to="/report-found">Report found Item</Link></li>
              <li><Link to="/found-items">Found Items</Link></li>
              <li><Link to="/profile">Your Profile</Link></li>
              {/* Add other navigation links as necessary */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal for Reporting Items */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalType === 'lost' ? 'Report Lost Item' : 'Report Found Item'}</h3>
            <form>
              <input type="text" placeholder="Item Name" required />
              <input type="text" placeholder="Location Last Seen/Found" required />
              <textarea placeholder="Description" required></textarea>
              <button type="submit">Submit</button>
            </form>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
