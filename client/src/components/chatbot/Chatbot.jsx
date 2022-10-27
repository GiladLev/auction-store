import { useEffect, useRef, useState } from 'react';
import Message from './Message'
import io from "socket.io-client";
import "./messanger.css";
const user =JSON.parse(localStorage?.getItem('user'))
console.log(user);
const socket = io.connect(user?.username==='admin' ? "http://localhost:3001/admin" : "http://localhost:3001");
const Chatbot = () => {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [allMessage, setAllMessage] = useState([]);

  const status = useRef("send_question");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(status.current);
    console.log(status.current === "send_question");
    if (status.current === "send_question"){
      socket.emit("send_question", { message });
    } else if(status.current === "askQuestion"){
      socket.emit("askQuestion", { message });
    }else if(status.current==='gotQuestionAskAns'){
      socket.emit("repatAns", { message });
    }
    setAllMessage((allMessage)=>[...allMessage, message]);
  };

  useEffect(() => {
    socket.on("send_answer", (data) => {
      console.log(status.current);
      if (data.status === 'askQuestion') {
        status.current='askQuestion'
      }else if(data.status === 'gotQuestionAskAns'){
        status.current='gotQuestionAskAns'
      }else{
        status.current ='send_question'
      }
      console.log(data);
      setAllMessage((allMessage)=>[...allMessage, data.message])
      console.log(allMessage);
    });
    //admin


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