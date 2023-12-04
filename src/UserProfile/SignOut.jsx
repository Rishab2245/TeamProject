import './UserProfile.css'
import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Signout = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate()

  const handleSignOut = () => {
    Cookies.remove('token');
    Cookies.remove('id');
    navigate('/');
  }

  return (
    <button onClick={handleSignOut} className='signout'>
      Sign Out
    </button>
  );
};

export default Signout;
