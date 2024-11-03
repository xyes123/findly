// src/components/ReportedItems.js
import React, { useState } from 'react';
import './ReportedItems.css';

const initialItems = [
  {
    id: 1,
    name: 'Lost Wallet',
    description: 'Black leather wallet with cards.',
    category: 'Accessories',
    date: '2024-11-01',
    location: 'Central Park',
    image: 'https://via.placeholder.com/150',
    status: 'Lost',
  },
  {
    id: 2,
    name: 'Found Phone',
    description: 'iPhone 12 found in cafe.',
    category: 'Electronics',
    date: '2024-10-30',
    location: 'Local Cafe',
    image: 'https://via.placeholder.com/150',
    status: 'Found',
  },
  // Add more items as needed
];

function ReportedItems() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="reported-items">
      <h2>Reported Items</h2>
      <input 
        type="text" 
        placeholder="Search by item name or category..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-bar"
      />
      <div className="items-grid">
        {filteredItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Date Reported:</strong> {item.date}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReportedItems;
