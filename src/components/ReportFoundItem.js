// src/components/ReportFoundItem.js
import React, { useState } from 'react';
import './ReportFoundItem.css'; // Create this CSS file for styling

function ReportFoundItem() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., sending data to a server)
    alert(`Found item reported: ${itemName}`);
  };

  return (
    <div className="report-found-item">
      <h2>Report Found Item</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Item Name" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Location Found" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
          accept="image/*" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportFoundItem;
