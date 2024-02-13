// App.js

import React, { useState } from 'react';


import './App.css';
import ChatWindow from './chatwindow/chatwindow';
import UserList from './userlist/userlist';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'ANKUR' },
    { id: 2, name: 'AKASH' },
    { id: 3, name: 'SURAJ' },
    // Add more users as needed
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <UserList users={users} onUserClick={handleUserClick} />
      {selectedUser && <ChatWindow selectedUser={selectedUser} />}
    </div>
  );
};

export default App;
