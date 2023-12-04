import React from 'react'
import './Todo.css'


import { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router'

const Todo = ({auth ,  tododata}) => {
  // const [lid,setLid]=useState('')
  // const [lname,setLname]=useState('')
  // const [ldata,setLdata]=useState('')
  
  
  console.log(auth);
  console.log(tododata);
  const id=tododata[0].id
  console.log(id);

  
 
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://teammanagement.onrender.com/api/list/getLists/${id}`, {
        headers:{
          withCredentials:true,
          'Authorization':auth,
        }
      });
      //  lid=response.data.lists[0]._id;
      //  lname=response.data.lists[0].name

      // setLid(lid)
      // setLname(lname)
      // console.log(lid);
      // console.log(lname);

      console.log(response.data.lists);
      

      console.log("All : ",response.data.lists);

      setLists(response.data.lists)
    
      
          
        
      console.log(response.data.lists[0].name);
      
        
      } catch (error) {
        console.error('Error:', error);
      }
      
    };
    
    useEffect(() => {
      fetchData();
    }, [auth, id]);

    const [lists, setLists] = useState([
      // { id: lid, name: 'To-Do', items: [],cards:[] },
      // { id: 2, name: 'In Progress', items: [],cards:[] },
      // { id: 3, name: 'Completed', items: [],cards:[] },
      // {id:lid,name:lname,cards:[]}
    ]);
    console.log(lists);
    const [showNewListPopup, setShowNewListPopup] = useState(false);
    const [newListName, setNewListName]=useState('');
    const [newCardName, setNewCardName]=useState('');
    const [newCardDesc,setNewCardDesc]=useState('')
    const [cards,setCards]=useState([])
    const [showAddCardPopup,setshowAddCardPopup]=useState(false);
    const [showDescPopup,setshowDescPopup]=useState(false);
    const [selectedListId, setSelectedListId] = useState(null);
    const [daysAlloted,setDaysAlloted]=useState(null)
    
    const handleInputChange = (e) => {
      setNewListName(e.target.value);
      
    };

    const handleAddList = () => {
      setShowNewListPopup(true)
    };

    const handleSubmit= async()=>{
      try{
        
        const addList= await axios.post("https://teammanagement.onrender.com/api/list/createList/", {
          "boardId":id,
          "name": newListName,
          "position":"1"
      },{
        headers:{
          withCredentials:true,
          'Authorization':auth,
        }
      })
      const idOfList=(addList.data.list._id);
      const newList = { id: idOfList, name: newListName, items: [], cards:[]};
        setLists((prevLists) => [...prevLists, newList]);
        
        setShowNewListPopup(false)
        setNewListName('')
    }
      catch(error){
        console.error("Error:",error)

      }
   };

    

    
    const handleClosePopup = () => {
      setShowNewListPopup(false);
      setNewListName('');
    };
    const handleNewCard = (e) => {
      setNewCardName(e.target.value);
      
    };
    
    const handleNewCardDesc = (e) => {
      setNewCardDesc(e.target.value);
      
    };
    const handleAddCard = (listId) => {
      console.log(listId);
      setSelectedListId(listId);
      setshowAddCardPopup(true);
    };
    const handleAddNewCard = async() => {
      console.log(parseInt((daysAlloted),10));
      setshowAddCardPopup(false)
      console.log(selectedListId);
          try{
            const addCard=  await axios.post("https://teammanagement.onrender.com/api/card/createCard/", {
              "name":newCardName,
              "description": newCardDesc,
              "position":"2",
              "boardId":id,
              "listId":selectedListId,
              "daysAlloted":parseInt((daysAlloted),10)
          },{
            headers:{
              withCredentials:true,
              'Authorization':auth,
            }
          })
          console.log(addCard.data);
          const newCard=addCard.data.card
          console.log(newCard);
          setLists((prevLists) => {
            return prevLists.map((list) => {
              if (list.id === selectedListId) {
                return {
                  ...list,
                  cards: [...list.cards, newCard],
                };
              }
              return list;
            });
          });
          
    
        }
          catch(error){
            console.error("Error:",error)
        
           
          }
        }
        const handleDeleteCard = async (cardId) => {
          try {
           
            await axios.delete(`https://teammanagement.onrender.com/api/card/deleteCard/${cardId}`, {
              headers: {
                withCredentials: true,
                'Authorization': auth,
              },
            });
            setLists((prevLists) => {
              return prevLists.map((list) => {
                return {
                  ...list,
                  cards: list.cards.filter((card) => card._id !== cardId),
                };
              });
            });
        
           
          } catch (error) {
            console.error('Error:', error);
          }
        };
  const handleViewDesc=(description)=>{
    setshowDescPopup(true)
    setNewCardDesc(description)

  }
     
   const handleCloseDescPopup=()=>{
    setshowDescPopup(false)
   }     
        
   const handleCloseCardPopup = () => {
    setshowAddCardPopup(false);
    setNewCardName('');
    setSelectedListId(null);
  };
  const handledays=(e)=>{
    setDaysAlloted(e.target.value)

  }
  

  
  console.log(lists.cards);

  return (

    <div className="todo">
      <div className="container">
        {lists.map((list) => (
          <div key={list.id} className="outer">
            <div className="centerDiv">
              <div className="headingContainer">
                <div className="heading"><h2>{list.name}</h2></div>
                 <div className="moreContainer">
                  <div className='buttton'>
                    <h4>Add Task</h4>
                  <button className='more'  onClick={() => handleAddCard(list._id)}>+</button>
                  </div>
                 </div>
              </div>
            </div>
            <div className="taskCard">
            {list.cards.map((card)=>(
                <div className="card">
                  <h5>{card.name}</h5>
                  <div className="card-buttons">
                  <button  className="more1" onClick={() => handleDeleteCard(card._id)}>-</button>
                  <button  className="more2" onClick={() => handleViewDesc(card.description)}>Details</button>
                  </div>

                </div>
              ))}
            </div>
          </div>
          
        ))}
       {showAddCardPopup &&(
          <div className="popup">
            <div className="popContent">
            <input className="inputb" type="text" placeholder='Name' onChange={handleNewCard} />
            <input className="inputb" type="text" placeholder='Description' onChange={handleNewCardDesc} />
            <button className='add' onClick={handleAddNewCard} >Add</button>
            <button className='close' onClick={handleCloseCardPopup}>Close</button>
            
            
            </div>
            
          </div>
        )}
        {showDescPopup&&(
          <div className="popup">
          {newCardDesc}
          <button className='close' onClick={handleCloseDescPopup}>Close</button>

            
          </div>
        )
        }
        <button className="new" onClick={handleAddList}>
          <span className='addNewList'>+ Add new list</span>
        </button>
        {showNewListPopup &&(
          <div className="popup">
            <div className="popContent">
            <input className="inputb" type="text" placeholder='New List Name' value={newListName} onChange={handleInputChange} />
            <button className='close' onClick={handleClosePopup}>Close</button>
            <button className='add' onClick={handleSubmit} >Add</button>
            
            </div>
            
          </div>
        )
        }
      </div>
    </div>
  )}

      

export default Todo