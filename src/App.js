import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (username.trim() && message.trim()) {
      const newMessage = { username, message };
      setChat([...chat, newMessage]);
      setMessage("");
    }
  };
  return (
    <div className="app-container">
      <div className="chat-box">
        <h1 className="chat-title">Chat Hive</h1>
        <div className="chat-window">
          {chat.map((entry, index) => (
            <div key={index} className="chat-message">
              <span className="chat-username">{entry.username}: </span>
              <span className="chat-text">{entry.message}</span>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            className="input-field message-box"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

