import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import useAuth from '../hooks/useAuth';

// import './App.css';

function App() {
  const { currentUser } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`, currentUser && { query: { currentUser } });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);


  return (
    <div className="App">
      <header className="app-header">
      </header>
      { socket ? (
        <div className="chat-container">
          <Messages user={currentUser} socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
