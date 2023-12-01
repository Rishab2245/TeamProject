import React from 'react'
import './Todo.css'

import { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router'

const Todo = () => {

  const [name,setName]=useState('');
  const [finalData,setFinalData]=useState([]);
  const [dataInThird,setDataInThird]=useState([]);
  const [listTwo,updateListTwo]=useState([]);
  const [listThree,updateListThree]=useState([]);
  const location = useLocation();
  const auth = location.state.auth
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.post('https://teammanagement.onrender.com/api/list/createList/', {
          "boardId" : "655f9bab6f88328911ab297a",
          "name" : newListName
        },{
        headers:{
          withCredentials:true,
          'Authorization':auth,
        }
      });
          
        
        console.log(response);
        const data = response.json();
        console.log(data);
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
  // const setUserData=({name})=>{
  //   setName(name)
  // }
  // console.log(name);

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

    const [lists, setLists] = useState([
      { id: 1, name: 'To-Do', items: [] },
      { id: 2, name: 'In Progress', items: [] },
      { id: 3, name: 'Completed', items: [] },
    ]);
    const [showNewListPopup, setShowNewListPopup] = useState(false);
    const [showAddCardPopup,setshowAddCardPopup]=useState(false);
    const [newListName, setNewListName]=useState('');
    const [cardName, setCardName]=useState('')
    
    const handleInputChange = (e) => {
      setNewListName(e.target.value);
      
    };
    const handleAddList = () => {
      setShowNewListPopup(true)
    };
    const handleSubmit=()=>{
      const newList = { id: Date.now(), name: newListName, items: [] };
    setLists((prevLists) => [...prevLists, newList]);
    setShowNewListPopup(false)
    setNewListName('')
    }
    const handleClosePopup = () => {
      setShowNewListPopup(false);
      setNewListName('');
    };
    const handleNewCard = (e) => {
      setCardName(e.target.value);
      
    };


  
  



  return (
    <div className="todo">
      <div className="container">
        {lists.map((list) => (
          <div key={list.id} className="outer">
            <button>more</button>
            <div className="heading">{list.name}</div>
          </div>
        ))}
        {showAddCardPopup}&&(
          <div className="card">
            <div className="cardContent">
            <input type="text" placeholder='new card name' value={cardName} onChange={handleNewCard} />
              
            </div>
          </div>
        )
        <button className="new" onClick={handleAddList}>
          Add new list
        </button>
        {showNewListPopup &&(
          <div className="popup">
            <div className="popContent">
            <input type="text" placeholder='new list name' value={newListName} onChange={handleInputChange} />
            <button onClick={handleClosePopup}>close</button>
            <button onClick={handleSubmit} >Add</button>
            
            </div>
            
          </div>
        )
        }
      </div>
    </div>
    
    
  )
}


export default Todo