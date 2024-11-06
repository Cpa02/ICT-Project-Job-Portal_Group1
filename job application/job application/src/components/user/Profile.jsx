import React from 'react';
import './profile.css';

const Profile = () => {
    const user = {
        name: "",
        email: "",
        phone: "",
        address: "",
        bio: "",
        profilePicture: ""
      };
    
  return (
    <div>
        <br /><br />
        <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePicture} alt="Profile" className="profile-image" />
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        
        <div className="profile-details">
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
        
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
    </div>
  )
}

export default Profile