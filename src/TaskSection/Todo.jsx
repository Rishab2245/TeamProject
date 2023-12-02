import React from 'react'
import './Todo.css'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router'

const Todo = ({auth ,  tododata}) => {
  console.log(tododata);


  const [name, setName] = useState('');
  const [finalData, setFinalData] = useState([]);
  const [dataInThird, setDataInThird] = useState([]);
  const [listTwo, updateListTwo] = useState([]);
  const [listThree, updateListThree] = useState([]);
  const location = useLocation();

  // const auth = Cookies.get('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://teammanagement.onrender.com/api/list/createList/', {
          "boardId": "655f9bab6f88328911ab297a",
          "name": newListName
        }, {
          headers: {
            withCredentials: true,
            'Authorization': auth,
          }
        });


        console.log(response);
        const data = response.json();
        console.log(data);


        setFinalData(finalData)
        console.log(finalData);

        console.log(setUserData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);  

  
    

    
    

    const [lists, setLists] = useState([
      { id: 1, name: 'To-Do', items: [],cards:[] },
      { id: 2, name: 'In Progress', items: [],cards:[] },
      { id: 3, name: 'Completed', items: [],cards:[] },
    ]);
    const [showNewListPopup, setShowNewListPopup] = useState(false);
    const [newListName, setNewListName]=useState('');
    const [newCardName, setNewCardName]=useState('');
    const [cards,setCards]=useState([])
    const [showAddCardPopup,setshowAddCardPopup]=useState(false);
    const [selectedListId, setSelectedListId] = useState(null);
    
    const handleInputChange = (e) => {
      setNewListName(e.target.value);
      
    };
    const handleAddList = () => {
      setShowNewListPopup(true)
    };
    const handleSubmit=()=>{
      const newList = { id: Date.now(), name: newListName, items: [], cards:[] };
    setLists((prevLists) => [...prevLists, newList]);
    setShowNewListPopup(false)
    setNewListName('')
  }
  const handleClosePopup = () => {
    setShowNewListPopup(false);
    setNewListName('');
  };
  const handleNewCard = (e) => {
    setNewCardName(e.target.value);

  };
  const handleAddCard = (listId) => {
    setSelectedListId(listId);
    setshowAddCardPopup(true);
  };
  const handleAddNewCard = () => {
    const newCard = { id: Date.now(), name: newCardName };
    const updatedLists = lists.map((list) => {
      if (list.id === selectedListId) {

        return { ...list, cards: [...list.cards, newCard] };
      }
      return list;
    });

    setLists(updatedLists);
    setshowAddCardPopup(false);
    setNewCardName('');
    setSelectedListId(null);

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
                  <button className='more' onClick={() => handleAddCard(list.id)}>Add new card</button>
                </div>
              </div>
            </div>
            <div className="taskCard">

              {list.cards.map((card) => (
                <div key={card.id} className="card">
                  <div className='head'>{card.name}</div>
                </div>
              ))}
            </div>
          </div>

        ))}
        {showAddCardPopup && (
          <div className="popup">
            <div className="popContent">
              <input className="inputb" type="text" placeholder='new card name' value={newCardName} onChange={handleNewCard} />
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