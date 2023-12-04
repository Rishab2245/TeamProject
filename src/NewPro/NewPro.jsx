import React, { useState } from 'react';
import './NewProj.css';
import illust from '../assets/Teamwork_-_Concept_Illustration-removebg-preview 1.png'
import axios from 'axios';

const NewPro = ({profunc , setprojectdata , auth , setmembers}) => {
  const [projectDetails, setProjectDetails] = useState({
    value: '',
    description: '',
    bol: "false"
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
      const response = await axios.post(
        'https://teammanagement.onrender.com/api/board/createBoard/',
        senddata,
        { headers: { authorization: auth } }
      );
      console.log('API Response:', response.data);
      let temp = { value:response.data.board.name , discription  
  , bol:"false" , members: response.data.board.members};
      setprojectdata(temp);
      // console.log(temp);

      // setmembers(temp);
      // console.log('API Response:', response.headers.authorization);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };
  const sendda = async () => {
    profunc();
    handleSubmit();
    
  }

  return (
    <>
    <div className="newP">
     <div className="newPBody">
     <div className="card1">
        <h1>New Project</h1>
        <div className="inputProj">
          <div className="pname">
          <div className="labels"> <div>
  <h4>Name of Project</h4></div>
  </div>
          <input
          className='input1'
            type="text"
            name="Project" 
            value={projectDetails.Project}
            onChange={handleChange}
          />
          </div>
          <div className="pdescrip">
          <div className="labels"><div>
  <h4>Description Of Project</h4></div></div>
          <textarea
          className='input2'
            type="text"
            name="description"
            value={projectDetails.description}
            onChange={handleChange}
          />
          </div>
        </div>
        <button className="create" onClick={sendda}>Create</button>
        </div>
     </div>
    </div>
    </>
  );
};

export default NewPro;
