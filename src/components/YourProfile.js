// src/components/ProfilePage.js
import React from 'react';
import './ProfilePage.css';
import { FaUserCircle, FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    phone: "+1234567890",
    bio: "A passionate user of Findly, always looking to help others!",
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h1 className="profile-name">{user.name}</h1>
        <button className="edit-button"><FaEdit /> Edit Profile</button>
      </div>
      <div className="profile-info">
        <h2>User Information</h2>
        <div className="info-item">
          <strong>Username:</strong> <span>{user.username}</span>
        </div>
        <div className="info-item">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className="info-item">
          <strong>Phone:</strong> <span>{user.phone}</span>
        </div>
        <div className="info-item">
          <strong>Bio:</strong> <span>{user.bio}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
