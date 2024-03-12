import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Yes",
      handler: props.actionProvider.handleHello,
      id: 1,
    },
    {
      name: "No",
      handler: props.actionProvider.handleHello,
      id: 2,
    },
    {
      name: "Skip",
      handler: props.actionProvider.handleHello,
      id: 3,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
