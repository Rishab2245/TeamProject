import './USD.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import usd from '../assets/Group 213.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const [addUserDetails, setAddUserDetails] = useState({
    skills: [],
    experience: '',
    TotalProject: '',
    language: '',
    gender: '',
  });

  const [userName, setUserName] = useState('');
  const name = location.state.name

  useEffect(() => {

    if (location.state && location.state.name) {
      setUserName(location.state.name);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setAddUserDetails({
      ...addUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://teammanagement.onrender.com/api/user/addUserDetails', {
        addUserDetails,
      });
      console.log('API Response:', response.data);
      Navigate('/aftersignup')
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  return (
    <div className='usd'>
      <div className='usdNav'>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' width='53' height='52' viewBox='0 0 53 52' fill='none'>
            <rect x='0.370117' width='52' height='52' fill='white' />
            <rect x='9.37012' y='10' width='13' height='33' fill='black' />
            <rect x='25.3701' y='10' width='16' height='14' fill='black' />
          </svg>
        </div>
        <div>
          <h3>Teemify</h3>
        </div>
      </div>
      <div>
        <div className='userdB'>
          <div>
            <img src={usd} alt='' className='avatar' />
          </div>
          <div className='form'>
            <div className='welcome'>
              <h1>Welcome</h1>
              {name && <h3 className='name'>{name}!</h3>}
            </div>
            <div className="inputFields">
              <div>
                <h5>Skills</h5>
                <input
                  type='text'
                  name='skills'
                  value={addUserDetails.skills}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h5>Experience</h5>
                <input
                  type='number'
                  name='experience'
                  value={addUserDetails.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <h5>Total Projects</h5>
                <input
                  type='number'
                  name='TotalProject'
                  value={addUserDetails.TotalProject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <h5>Language of Communication</h5>
                <input
                  type='text'
                  name='language'
                  value={addUserDetails.language}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <h5>Gender</h5>
                <input
                  type='text'
                  name='gender'
                  value={addUserDetails.gender}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type='button' className='submit' onClick={handleSubmit}>
              Proceed
            </button>
          </div>
        </div>
        <div className='wave'>
          <svg xmlns='http://www.w3.org/2000/svg' width='100%' viewBox='0 0 1512 169' fill='none'>
            <path
              d='M401.354 32.818C271.066 36.6527 77.7019 117.361 -0.199241 170.008L1500.57 197.699C1523.29 132.061 1554.88 0.862285 1499.48 1.16896C1430.23 1.5523 1229.95 118.442 1013.42 119.641C796.898 120.839 564.216 28.0247 401.354 32.818Z'
              fill='url(#paint0_linear_542_43)'
              stroke='url(#paint1_linear_542_43)'
              strokeWidth='1.18632'
            />
            <defs>
              <linearGradient id='paint0_linear_542_43' x1='24.3324' y1='108.483' x2='1530.75' y2='100.144' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#D9D9D9' />
                <stop offset='1' stopColor='#D9D9D9' stopOpacity='0.69' />
              </linearGradient>
              <linearGradient id='paint1_linear_542_43' x1='-0.199092' y1='170.009' x2='1493.76' y2='170.784' gradientUnits='userSpaceOnUse'>
                <stop stopColor='white' />
                <stop offset='1' stopColor='#707070' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
