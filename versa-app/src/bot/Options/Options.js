import React from "react";

const Options = ({ options }) => {
  const markup = options.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.name}
    </button>
  ));

  return <div>{markup}</div>;
};

export default Options;
