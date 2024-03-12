// in ActionProvider.jsx
import React from 'react';
// import { createCustomMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.', {widget: "generalOptions"});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
const handleOptIn = () => {const botMessage = createChatBotMessage('You have selected OPt in', {widget: "generalOptions"});

setState((prev) => ({
  ...prev,
  messages: [...prev.messages, botMessage],
}));}
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,handleOptIn
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;