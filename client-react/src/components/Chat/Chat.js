import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import avatar from '../../assets/images/avatar.jpg';
import 'react-chat-widget/lib/styles.css';
import './Chat.css'

const Chat = () => {

  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API

    addResponseMessage('How are you ?');
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={avatar}
        title="Algomastery"
        subtitle="Have a doubt ? Ask us !"
        color="teal"
      />
    </div>
  );
}

export default Chat