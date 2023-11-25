import React from 'react'
import './Todo.css'

import { useState,useEffect } from 'react'

const Todo = () => {

  const [name,setName]=useState('');
  const [finalData,setFinalData]=useState([]);
  const [dataInThird,setDataInThird]=useState([]);
  const [listTwo,updateListTwo]=useState([]);
  const [listThree,updateListThree]=useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const finalData=data.map((item)=>({
          id: item.id,
          fullName:item.name,
          username:item.username,

        }));
        setFinalData(finalData)
        console.log(finalData);
        // const details= data[0];
        // console.log(details);
        // setUserData(details)
        console.log(setUserData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  const setUserData=({name})=>{
    setName(name)
  }
  console.log(name);

  const handleDeleteInOne = (idToDelete) => {
    const elementToDelete = finalData.find((user) => user.id === idToDelete);
    updateListTwo((prevListTwo) => [...prevListTwo, elementToDelete]);
    const updatedDataInOne = finalData.filter((user) => user.id !== idToDelete);

    setFinalData(updatedDataInOne)
    console.log(finalData);
    const newTwo=updatedDataInOne;
    console.log(elementToDelete);
    
    
    }
    useEffect(() => {
      // Log listTwo whenever it changes
      console.log('List Two:', listTwo);
    }, [listTwo]); 

    const handleDeleteInTwo = (idToDelete) => {
      const elementToDelete = listTwo.find((user) => user.id === idToDelete);
   
      updateListThree((prevListThree) => [...prevListThree, elementToDelete]);
      const updatedDataInTwo = listTwo.filter((user) => user.id !== idToDelete);
      console.log(updatedDataInTwo);
      setDataInThird(updatedDataInTwo)
      updateListTwo(updatedDataInTwo)

  
    
    }
    useEffect(() => {
   
      console.log('list three:',listThree);
    }, [listThree]); 

  
  



  return (
    
    <div className='container'>
     

      
      {/* <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.firstname}</li>
        ))}
      </ul> */}
    <div className='outer'>
      <div className='heading'>
        TO-DO
      

      </div>
      
     
    
      
  
      
        {finalData.map((user,index)=>(
          <div key={user.id} className='taskBox'>
            <button onClick={() => handleDeleteInOne(user.id)}className='btn' >Next</button>
            
          <div className='name'>{user.fullName}</div>
          <div className='name'>{user.username}</div>
          </div>
        ))}
        
        
        
      </div>
    
    <div className='outerProg'>
    <div className='heading'>
        In Progress
        </div>
    
      
      {listTwo.map((user,index)=>(
          <div key={user.id} className='taskBox'>
            <button onClick={() => handleDeleteInTwo(user.id)}className='btn' >Next</button>
            
          <div className='name'>{user.fullName}</div>
          <div className='name'>{user.username}</div>
          </div>
        ))}
        
      
    </div>

    <div className='outerComp'>
    <div className='heading'>
        Completed
        </div>
  
    {listThree.map((user,index)=>(
          <div key={user.id} className='taskBox'>
            
            
          <div className='name'>{user.fullName}</div>
          <div className='name'>{user.username}</div>
          </div>
        ))}
    </div>
    
    
    </div>
  )
}


export default Todo