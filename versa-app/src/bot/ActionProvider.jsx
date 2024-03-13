// in ActionProvider.jsx
import React from "react";
// import React, { useMemo } from "react";
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
  const handleYes = () => {};

  // const handleYes = () => {
  //   // const calculation = useMemo(() => {
  //   //   console.log("Calling the optin from handle yes");
  //   //   handleOptIn();
  //   // }, [state.questionList]);

  //   let yesButton = document.getElementById(
  //     `button_yes_${state.currentQuestion}`
  //   );
  //   let noButton = document.getElementById(
  //     `button_no_${state.currentQuestion}`
  //   );
  //   console.log(
  //     `prebutton exists button_yes_${state.currentQuestion}`,
  //     yesButton
  //   );

  //   if (yesButton) {
  //     yesButton.disabled = true;
  //     yesButton.onclick = null;
  //     yesButton.removeAttribute("onclick");
  //     yesButton.style.opacity = "0.5";
  //     yesButton.style.cursor = "not-allowed";

  //     console.log(
  //       `button exists button_yes_${state.currentQuestion}`,
  //       yesButton
  //     );
  //   }
  //   console.log(
  //     `prebutton exists button_no_${state.currentQuestion}`,
  //     noButton
  //   );

  //   if (noButton) {
  //     noButton.disabled = true;
  //     noButton.onclick = null;
  //     noButton.removeAttribute("onclick");
  //     noButton.style.opacity = "0.5";
  //     noButton.style.cursor = "not-allowed";

  //     console.log(`button exists button_no_${state.currentQuestion}`, noButton);
  //   }
  //   setState((prev) => {
  //     console.log(
  //       "handle yes previous prev",
  //       prev,
  //       `${prev.currentQuestion}_yes`,
  //       `${prev.currentQuestion}_no`
  //     );

  //     const qnIndex = prev.questionList.findIndex(
  //       (x) => x.questionNumber === prev.currentQuestion
  //     );
  //     let updatedQnList = [...prev.questionList];
  //     updatedQnList[qnIndex] = { ...updatedQnList[qnIndex], answer: "Yes" };

  //     return {
  //       ...prev,
  //       questionList: updatedQnList,
  //       currentQuestion: prev.currentQuestion + 1,
  //     };
  //   });
  //   console.log("Calling the optin from handle yes");
  //   handleOptIn();
  // };
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
  // const calculation = useMemo(() => {
  //   console.log("Calling the optin from handle yes");
  //   handleOptIn();
  // }, [state.questionList]);
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
