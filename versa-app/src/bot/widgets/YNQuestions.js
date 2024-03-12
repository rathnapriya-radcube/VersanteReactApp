import React from "react";
import Options from "../Options/Options";

const YNQuestions = (props) => {
  const options = [
    {
      name: "Yes",
      handler: props.actionProvider.handleYes,
      id: `button_yes_${props.state.currentQuestion}`,
    },
    {
      name: "No",
      handler: props.actionProvider.handleNo,
      id: `button_no_${props.state.currentQuestion}`,
    },
  ];
  console.log("Ynprops", props, options);

  return <Options {...props} options={options} />;
};

export default YNQuestions;
