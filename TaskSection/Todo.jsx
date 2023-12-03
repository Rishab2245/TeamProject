import React from 'react'
import './Todo.css'


import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router'

const Todo = ({ auth, tododata }) => {
  // const [lid,setLid]=useState('')
  // const [lname,setLname]=useState('')
  // const [ldata,setLdata]=useState('')
  
  // console.log(auth);
  // console.log(tododata);
  const id = tododata[0].id
  console.log(id);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://teammanagement.onrender.com/api/list/getLists/${id}`, {
        headers: {
          withCredentials: true,
          'Authorization': auth,
        }
      });
      //  lid=response.data.lists[0]._id;
      //  lname=response.data.lists[0].name

      // setLid(lid)
      // setLname(lname)
      // console.log(lid);
      // console.log(lname);
      console.log(response.data.lists);

      setLists(response.data.lists)

      const l = response.data.lists;
      console.log(l);


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
  const [newListName, setNewListName] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newCardDesc, setNewCardDesc] = useState('')
  const [cards, setCards] = useState([])
  const [showAddCardPopup, setshowAddCardPopup] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  const handleInputChange = (e) => {
    setNewListName(e.target.value);

  };

  const handleAddList = () => {
    setShowNewListPopup(true)
  };

  const handleSubmit = async () => {
    try {

      const addList = await axios.post("https://teammanagement.onrender.com/api/list/createList/", {
        "boardId": id,
        "name": newListName,
        "position": "1"
      }, {
        headers: {
          withCredentials: true,
          'Authorization': auth,
        }
      })
      const idOfList = (addList.data.list._id);
      const newList = { id: idOfList, name: newListName, items: [], cards: [] };
      setLists((prevLists) => [...prevLists, newList]);

      setShowNewListPopup(false)
      setNewListName('')
    }
    catch (error) {
      console.error("Error:", error)

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
  const handleAddNewCard = async () => {
    setshowAddCardPopup(false)
    console.log(selectedListId);
    try {
      const addCard = await axios.post("https://teammanagement.onrender.com/api/card/createCard/", {
        "name": newCardName,
        "description": "lorem",
        "position": "2",
        "boardId": id,
        "listId": selectedListId


      }, {
        headers: {
          withCredentials: true,
          'Authorization': auth,
        }
      })
      console.log(addCard.data);
      const newCard = addCard.data.card
      console.log(newCard);

      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === selectedListId
            ? { ...list, cards: [...list.cards, newCard] }
            : list
        )
      );
      console.log(lists);
    }
    catch (error) {
      console.error("Error:", error)


    }
  }











  const handleCloseCardPopup = () => {
    setshowAddCardPopup(false);
    setNewCardName('');
    setSelectedListId(null);
  };





  return (

    <div className="todo">
      <div className="container">
        {lists.map((list) => (
          <div key={list.id} className="outer">
            <div className="centerDiv">
              <div className="headingContainer">
                <div className="heading">{list.name}</div>
                <div className="moreContainer">
                  <button className='more' onClick={() => handleAddCard(list._id)}>Add new card</button>
                </div>
              </div>
            </div>
            <div className="taskCard">

              {list.cards && Array.isArray(list.cards) && list.cards.map((card) => (
                <div key={card._id} className="card">
                  {/* <div className='head'>{card.name}</div>
                <div className='description'>{card.description}</div> */}
                  {card}

                </div>

              ))}



            </div>
          </div>

        ))}
        {showAddCardPopup && (
          <div className="popup">
            <div className="popContent">
              <input className="inputb" type="text" placeholder='new card name' value={newCardName} onChange={handleNewCard} />
              {/* <input className="inputb" type="text" placeholder='card description' value={newCardDesc} onChange={handleNewCardDesc} /> */}
              <button className='close' onClick={handleCloseCardPopup}>Close</button>
              <button className='add' onClick={handleAddNewCard} >Add</button>

            </div>

          </div>
        )
        }
        <button className="new" onClick={handleAddList}>
          <span className='addNewList'>+ Add new list</span>
        </button>
        {showNewListPopup && (
          <div className="popup">
            <div className="popContent">
              <input className="inputb" type="text" placeholder='new list name' value={newListName} onChange={handleInputChange} />
              <button className='close' onClick={handleClosePopup}>Close</button>
              <button className='add' onClick={handleSubmit} >Add</button>

            </div>

          </div>
        )
        }
      </div>
    </div>
  )
}



export default Todo