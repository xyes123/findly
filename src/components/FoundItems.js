// src/components/FoundItems.js
import React, { useState } from 'react';
import './FoundItems.css';

const initialFoundItems = [
  {
    id: 1,
    name: 'Lost Wallet',
    description: 'Black leather wallet found in Central Park.',
    imageUrl: 'https://via.placeholder.com/150',
    location: 'Central Park',
  },
  {
    id: 2,
    name: 'Keys',
    description: 'Set of keys found near the library.',
    imageUrl: 'https://via.placeholder.com/150',
    location: 'City Library',
  },
];

function FoundItems() {
  const [foundItems] = useState(initialFoundItems);

  const handleClaimItem = (itemName) => {
    alert(`You expressed interest in claiming: ${itemName}`);
    // Here you would implement logic to connect the user with the item owner
  };

  return (
    <div className="found-items">
      <h2>Found Items Marketplace</h2>
      <div className="filter-options">
        <input type="text" placeholder="Search by category..." />
        <button>Filter</button>
      </div>
      <div className="items-grid">
        {foundItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <button onClick={() => handleClaimItem(item.name)}>Claim Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;
