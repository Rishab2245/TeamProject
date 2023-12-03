import './Chats.css'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = location.state && location.state.name;

    if (name) {
      setUserName(name);
    }
  }, [location.state]);

  useEffect(() => {
    const socket = io('');

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const message = {
        username: userName,
        text: messageInput,
      };

      socket.emit('message', message);

      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageInput('');
    }
  };

  return (
    <div className='chats'>
      <div >
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className='userChatin'>
        <div><input
        className='chatbox'
          type="text"
          value={messageInput}
          placeholder='type a message'
          onChange={(e) => setMessageInput(e.target.value)}
        /></div>
        <div><button onClick={sendMessage} className='sendmessage'>Send</button></div>
      </div>
    </div>
  );
};

export default Chat;
