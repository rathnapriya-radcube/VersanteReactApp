import React, { useEffect } from "react";

const Options = ({ options }) => {
  // const { options, setState } = props;
  // console.log("Options props", props);
  // const handleButton = (buttonValue) => {
  //   setState((prev) => {
  //     console.log(
  //       "handleButton previous prev",
  //       prev,
  //       `${prev.currentQuestion}_yes`,
  //       `${prev.currentQuestion}_no`
  //     );
  //     let yesButton = document.getElementById(
  //       `button_yes_${prev.currentQuestion}`
  //     );
  //     let noButton = document.getElementById(
  //       `button_no_${prev.currentQuestion}`
  //     );
  //     if (yesButton) {
  //       console.log(`button exists button_yes_${prev.currentQuestion}`);
  //       yesButton.disabled = true;
  //     }
  //     if (noButton) {
  //       console.log(`button exists button_no_${prev.currentQuestion}`);
  //       noButton.disabled = true;
  //     }
  //     const qnIndex = prev.questionList.findIndex(
  //       (x) => x.questionNumber === prev.currentQuestion
  //     );
  //     let updatedQnList = [...prev.questionList];
  //     updatedQnList[qnIndex] = {
  //       ...updatedQnList[qnIndex],
  //       answer: buttonValue,
  //     };

  //     return {
  //       ...prev,
  //       questionList: updatedQnList,
  //       currentQuestion: prev.currentQuestion + 1,
  //     };
  //   });
  // };
  // useEffect(() => {
  //   console.log("Calling the optin from handle yes");
  //   props.actionProvider.handleOptIn();
  // }, [props.state.questionList[props.state.currentQuestion]]);
  const markup = options.map((option) => (
    <button key={option.id} id={option.id} onClick={option.handler}>
      {option.name}
    </button>
  ));

  return <div>{markup}</div>;
};

export default Options;
