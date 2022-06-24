import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';



// import './MessageInput.css';

const NewMessage = ({ socket }) => {
  const { currentUser } = useAuth();
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', `${currentUser.username} ${value}`);
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;

