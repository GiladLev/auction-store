import { useEffect, useState } from 'react';
import Message from './Message'
import io from "socket.io-client";
import "./messanger.css";
const socket = io.connect("http://localhost:3001");
const Chatbot = () => {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [allMessage, setAllMessage] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit("send_message", { message });
    setAllMessage([...allMessage, message]);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setAllMessage((allMessage)=>[...allMessage, data.message])
      
    });
  }, [socket]);
  return (
    <div className="chatBox">
          <div className="ChatBoxWrapper">
            <div className="chatBoxTop">
             {allMessage.map((msg, index)=>{return <Message key={index} message={msg}/>}) }
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
              <button onClick={sendMessage} className="chatSubmitButton">Send</button>
            </div>
            <div >
              <input placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }} />
              <button onClick={joinRoom} className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
  )
}

export default Chatbot