import './UserProfile.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const token = Cookies.get('token');
  const id = Cookies.get('id');
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {

        if (!token) {
          console.error('Authentication token not found.');
          return;
        }
        const response = await axios.get(`https://teammanagement.onrender.com/api/user/getUserDetails/${id}`, {
          headers: {
            'Authorization': token
          }
        })
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
        <h1>Name : {userProfile.name}</h1>
        <h1>Mail : {userProfile.email}</h1>
      </div>
    </div>
  );
};

export default UserProfile;
