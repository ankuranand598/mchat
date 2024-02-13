import React, { useState, useEffect } from 'react';
import Message from '../message/message';
// ChatWindow.js
const ChatWindow = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch or load messages for the selected user
    loadMessages(selectedUser.id);
  }, [selectedUser]);

  const loadMessages = (friendId) => {
    // Replace this logic with your real-time data fetching or storage retrieval
    const storedMessages = localStorage.getItem(`messages_${friendId}`);
    const parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
    setMessages(parsedMessages);
  };

  const saveMessages = (friendId, updatedMessages) => {
    // Replace this logic with your real-time data storing or storage update
    localStorage.setItem(`messages_${friendId}`, JSON.stringify(updatedMessages));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
      setMessages(updatedMessages);
      saveMessages(selectedUser.id, updatedMessages);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <h2>{selectedUser.name}</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;