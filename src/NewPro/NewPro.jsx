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
      let temp = { value:response.data.board.name , discription: response.data.board.description , id: response.data.board._id , bol:"false" , members: response.data.board.members};
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
          <div className="labels"> <div> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <rect x="1" y="1" width="15.8061" height="16.2926" stroke="black" stroke-width="2"/>
  <line x1="2" y1="11.3936" x2="15.8061" y2="11.3936" stroke="black" stroke-width="2"/>
</svg></div> <div>
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
          <div className="labels"> <div> 
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M1 1H13.8176" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 5.54102H13.8176" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 10.0869H13.8176" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 14.6289H6.69669" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
</div> <div>
  <h4>Description Of Project</h4></div></div>
          <input
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
        <div className="illust">
          <img src={illust} alt="" />
        </div>
     </div>
    </div>
    </>
  );
};

export default NewPro;
