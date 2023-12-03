import './UserProfile.css'
import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Signout = () => {
    const token = Cookies.get('token');
    const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
        
        if (!token) {
            console.error('Authentication token not found.');
            return;}
        Cookies.remove('token');
      await axios.get('https://teammanagement.onrender.com/api/user/logout', null, {
        headers: { Authorization: token },
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleSignOut} className='signout'>
      Sign Out
    </button>
  );
};

export default Signout;
