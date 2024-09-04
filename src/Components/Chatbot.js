import React from 'react'
import chaticon from '../Assets/chaticon.png'; 
const Chatbot = () => {
  return (
    <div>
        <style>
            {
                `
   df-messenger{
    --df-messenger-bot-message: #7ABA78;
    --df-messenger-button-titlebar-color: #1A4D2E;
    
   }
   `
            }
        </style>
    <df-messenger
      intent="WELCOME"
      chat-title="Blogwebsupport"
      agent-id="182b85ab-1a6c-48f7-a6dd-6ee107e15c52"
      language-code="en"
      chat-icon={chaticon}        
      
    ></df-messenger>
    
    </div>
  )
}
export default Chatbot;

