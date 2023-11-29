import React, { useState } from 'react';
import './AddPr.css';
import axios from 'axios';

const AddProject = ({profunc , setprojectdata , auth}) => {
  const [projectDetails, setProjectDetails] = useState({
    Project: '',
    description: '',
    bol:"false"
  });
  

  const handleChange = (e) => {
    setProjectDetails({
      ...projectDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    
    // e.preventDefault();
    let senddata = {}
    senddata["name"] = projectDetails["Project"]
    senddata["description"] = projectDetails["description"]
    senddata["color"] = projectDetails[""]
    console.log(senddata);

    try {
      const response = await axios.post('https://teammanagement.onrender.com/api/board/createBoard/',senddata , {headers: {authorization : auth}});
      console.log('API Response:', response.data);
      // console.log('API Response:', response.headers.authorization);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  const sendda = ()=>{
    profunc();
    handleSubmit();
    setprojectdata(projectDetails);
  }

  return (
    <div className='adpr'>
      <div className="top-section">
        <h1>Add Project</h1>
      </div>
      <div className="FormBody">
        <div className="projectName">
          <h4>Name of project</h4>
          <input
          className='input'
            type="text"
            name="Project" 
            value={projectDetails.Project}
            onChange={handleChange}
          />
        </div>

        <div className="PDescrip">
          <h4>Project Description</h4>
          <input
          className='input'
            type="text"
            name="description"
            value={projectDetails.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='submit' type="button" onClick={sendda}>
            Done!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
