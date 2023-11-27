import './USD.css'
import React, { useState } from 'react';
import axios from 'axios';
import Logo1 from "../assets/Logo_Teemify.png"
import usd from "../assets/usd.webp"
const UserDetails = () => {
  const [addUserDetails, setaddUserDetails] = useState({
    experience: '',
    age: '',
    speciality: '',
    bio: '',
  });

  const handleChange = (e) => {
    setaddUserDetails({
      ...addUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://teammanagement.onrender.com//api/user/addUserDetails", { addUserDetails });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  return (
    <div className='usd'>
      <div className="logo">
        <div><img src={Logo1} alt="" /></div>
        <div> <h3>Teemify</h3></div>
      </div>
      <div>
        <div className="userd">
          <div className='form'>
            <div>
              <input
                type="number"
                name="experience"
                placeholder='Experience(in years)'
                value={addUserDetails.experience}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="age"
                placeholder='Age'
                value={addUserDetails.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="speciality"
                placeholder='Speciality'
                value={addUserDetails.speciality}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="bio"
                placeholder='Bio'
                value={addUserDetails.bio}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div >
            <img src={usd} alt="" className='avatar' />
          </div>
        </div>
        <button type="button" className='submit' onClick={handleSubmit}>Submit</button>

      </div>
    </div>
  );
};

export default UserDetails;
