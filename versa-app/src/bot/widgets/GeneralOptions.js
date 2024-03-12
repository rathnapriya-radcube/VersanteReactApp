import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Opt In",
      handler: props.actionProvider.handleOptIn,
      id: 1,
    },
    {
      name: "Opt Out",
      handler: props.actionProvider.handleHello,
      id: 2,
    },
    {
      name: "Know More",
      handler: props.actionProvider.handleHello,
      id: 3,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
