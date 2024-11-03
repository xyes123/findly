// src/components/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const initialUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://via.placeholder.com/100',
};

const initialReportedItems = [
  { id: 1, name: 'Lost Phone', status: 'Lost' },
  { id: 2, name: 'Found Jacket', status: 'Found' },
];

function Profile() {
  const [user, setUser] = useState(initialUser);
  const [reportedItems, setReportedItems] = useState(initialReportedItems);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(user.name);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUser({ ...user, name: newUserName });
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <img src={user.profilePicture} alt="Profile" />
        <div>
          {isEditing ? (
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          ) : (
            <h3>{user.name}</h3>
          )}
          <p>Email: {user.email}</p>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEditProfile}>Edit Profile</button>
          )}
        </div>
      </div>
      <h3>Your Reported Items</h3>
      <ul className="reported-items">
        {reportedItems.map((item) => (
          <li key={item.id}>
            {item.name} - <strong>{item.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
