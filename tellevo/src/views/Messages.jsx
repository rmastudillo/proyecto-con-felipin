import React, { useEffect, useState } from 'react';

// import './Messages.css';

function Messages({ user, socket }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        //{console.log("SOCKET", socket)}
        // socket.
        { console.log("SOCKETUSER", message) }
        //message.user.id = user.id;
        message.value = "  " + user.username + ":  " + message.value;
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className="message-container"
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="date">{new Date(message.time).toLocaleTimeString()}</span>
            {/*  <span className="user">{message.user.name}:</span> */}
            <span className="message">{message.value}</span>

          </div>
        ))
      }
    </div>
  );
}

export default Messages;

