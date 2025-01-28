import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [showOptions, setShowOptions] = useState(null);

  const handleSend = () => {
    if (username.trim() && message.trim()) {
      const newMessage = { username, message, likes: 0, love: 0, dislikes: 0 };
      setChat([...chat, newMessage]);
      setMessage("");
    }
  };

  const handleLike = (index) => {
    const updatedChat = [...chat];
    updatedChat[index].likes += 1;
    setChat(updatedChat);
  };

  const handlelove = (index) => {
    const updatedChat = [...chat];
    updatedChat[index].love += 1;
    setChat(updatedChat);
  };

  const handleDislike = (index) => {
    const updatedChat = [...chat];
    updatedChat[index].dislikes += 1;
    setChat(updatedChat);
  };

  const toggleOptions = (index) => {
    setShowOptions(showOptions === index ? null : index); // Toggle options visibility
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <h1 className="chat-title">Chat Hive</h1>
        <div className="chat-window">
          {chat.map((entry, index) => (
            <div key={index} className="chat-message">
              <span className="chat-username">{entry.username} : </span>
              <span className="chat-text">{entry.message}</span>
              
              <div className="reaction-container">
               <button className="reaction-button" onClick={() => handleLike(index)}>
               👍🏻 {entry.likes}</button>
               <button className="reaction-button" onClick={() => handlelove(index)}
                >❤️ {entry.love}</button>
                <button className="reaction-button" onClick={() => handleDislike(index)}
                >👎🏻 {entry.dislikes}</button>
             
                <button className="three-dots" onClick={() => toggleOptions(index)}>⋮</button>
                  {showOptions === index && (
                  <div className="dropdown">
                    <button className="dropdown-item">Edit</button>
                    <button className="dropdown-item">Delete</button>
              </div>
                  )}
              </div>
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

