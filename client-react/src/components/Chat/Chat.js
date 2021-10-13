import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { simplePostCall } from '../../api/ApiServices'
import ApiConfig from '../../api/ApiConfig'
import avatar from '../../assets/images/avatar.jpg';
import 'react-chat-widget/lib/styles.css';
import './Chat.css'

const Chat = () => {

  useEffect(() => {
    addResponseMessage('Enter your email to proceed!');
  }, []);

  const handleNewUserMessage = async (newMessage) => {

    const sendChatMessageUrl = ApiConfig.SEND_CHAT_MESSAGE
    const messageBody = {
      email: newMessage
    }
    console.log('chat url: ', sendChatMessageUrl)
    const response = await simplePostCall(sendChatMessageUrl, messageBody)
    console.log('Response from chat post request: ', JSON.stringify(response))


    addResponseMessage('We will get back shortly!');
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