// src/components/UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';
import { FaUserCircle, FaCamera, FaSave } from 'react-icons/fa';

function UserProfile() {
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    profilePicture: null,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({
        ...profileData,
        profilePicture: URL.createObjectURL(file)
      });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add functionality to save the data
    console.log('Profile saved:', profileData);
  };

  return (
    <div className="user-profile">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-picture">
        {profileData.profilePicture ? (
          <img src={profileData.profilePicture} alt="Profile" className="profile-img" />
        ) : (
          <FaUserCircle className="profile-icon" />
        )}
        <label className="upload-button">
          <FaCamera /> Upload
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
      </div>
      <form onSubmit={handleSave} className="profile-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={profileData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={profileData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={profileData.phone} onChange={handleChange} required />
        </div>
        <h3 className="password-change-title">Change Password</h3>
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" name="currentPassword" value={profileData.currentPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" name="newPassword" value={profileData.newPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={profileData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className="save-button"><FaSave /> Save Changes</button>
      </form>
    </div>
  );
}

export default UserProfile;
