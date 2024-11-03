// src/components/ReportLostItem.js
import React, { useState } from 'react';
import './ReportLostItem.css';

function ReportLostItem() {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage('Your lost item has been reported successfully!');
  };

  return (
    <div className="report-lost-item">
      <h2>Report Lost Item</h2>
      {confirmationMessage && <p className="confirmation">{confirmationMessage}</p>}
      <form onSubmit={handleSubmit} className="lost-item-form">
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input type="text" id="itemName" name="itemName" placeholder="Enter item name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Describe the item" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="documents">Documents</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date Lost</label>
          <input type="date" id="date" name="date" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" placeholder="Where was it last seen?" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="imageUpload">Image Upload</label>
          <input type="file" id="imageUpload" name="imageUpload" accept="image/*" />
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ReportLostItem;
