// in ActionProvider.jsx
import React from "react";
// import { createCustomMessage } from 'react-chatbot-kit';

const ActionProvider = (props) => {
  const { state, createChatBotMessage, setState, children } = props;
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleYes = () => {
    setState(
      (prev) => {
        console.log(
          "handle yes previous prev",
          prev,
          `${prev.currentQuestion}_yes`,
          `${prev.currentQuestion}_no`
        );
        let yesButton = document.getElementById(
          `button_yes_${prev.currentQuestion}`
        );
        let noButton = document.getElementById(
          `button_no_${prev.currentQuestion}`
        );
        if (yesButton) {
          console.log(`button exists button_yes_${prev.currentQuestion}`);
          yesButton.disabled = true;
        }
        if (noButton) {
          console.log(`button exists button_no_${prev.currentQuestion}`);
          noButton.disabled = true;
        }
        const qnIndex = prev.questionList.findIndex(
          (x) => x.questionNumber === prev.currentQuestion
        );
        let updatedQnList = [...prev.questionList];
        updatedQnList[qnIndex] = { ...updatedQnList[qnIndex], answer: "Yes" };

        return {
          ...prev,
          questionList: updatedQnList,
          currentQuestion: prev.currentQuestion + 1,
        };
      },
      () => {
        console.log("Calling the optin from handle yes");
        handleOptIn();
      }
    );
  };
  const handleNo = () => {};

  const handleOptIn = () => {
    let chatBotCurrentQuestion = state.currentQuestion;
    console.log(state.currentQuestion, "handleOptIn props", props);

    let chatBotQuestionObj = state.questionList.filter(
      (x) => x.questionNumber === chatBotCurrentQuestion
    );
    let chatBotQuestion = chatBotQuestionObj[0].question;
    console.log(
      "cq",
      chatBotCurrentQuestion,
      "chatBotQuestionObj",
      chatBotQuestionObj,
      "qn",
      chatBotQuestion
    );
    const botMessage = createChatBotMessage(`${chatBotQuestion}`, {
      widget: "ynQuestion",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOptOut = () => {
    const botMessage = createChatBotMessage("You have selected Opt Out", {
      widget: "generalOptions",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOptKnowMore = () => {
    const botMessage = createChatBotMessage("You have selected Know More", {
      widget: "generalOptions",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOptIn,
            handleOptOut,
            handleOptKnowMore,
            handleYes,
            handleNo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
