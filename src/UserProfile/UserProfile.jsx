import './UserProfile.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const token = Cookies.get('token'); 
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        
        if (!token) {
          console.error('Authentication token not found.');
          return;
        }
        const response = await axios.post('https://teammanagement.onrender.com/api/user/addUserDetails', null, {
          headers: { Authorization: token },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <div className='UserProfileCards'>
     <div className="cardHead"> 
     <h1>Name: {userProfile.name}</h1>
      <p>Email: {userProfile.email}</p>
      </div>
     <div className="UCardBody"> 
    <ul>
    <li>Skills: {userProfile.skills.join(', ')}</li>
      <li>Experience: {userProfile.experience} years</li>
      <li>Number of Projects: {userProfile.projects}</li>
      <li>Language: {userProfile.language}</li>
    </ul>
     </div>
     
    </div>
  );
};

export default UserProfile;
