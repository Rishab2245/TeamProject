import './UserProfile.css'
import UserProfile from './UserProfile';
import Signout from "./SignOut"
import React from 'react';

const UserProfilePage = () => {
  return (
    <div className='profile'>
      <div><UserProfile /></div>
      <div> <Signout /></div>
    </div>
  );
};

export default UserProfilePage;
