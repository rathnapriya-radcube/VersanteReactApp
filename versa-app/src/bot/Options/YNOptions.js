import React, { useEffect, useState } from "react";

const YNOptions = ({ options, buttonHandler }) => {
  const [disabledButtons, setDisabledButtons] = useState(false);
  console.log("YNOptions ", options);
  const handleClick = (option) => {
    console.log("disabled buttons", option.name, "---", disabledButtons);
    const button = document.getElementById(option.id);
    if (button) {
      button.removeAttribute("onclick");
      console.log(
        "remove button onclick",
        option.name,
        "---",
        option.id,
        button
      );
    }
    // setDisabledButtons((prev) => ({ ...prev, [option.id]: true }));
    setDisabledButtons(true);
    buttonHandler(option.name);
  };
  const markup = options.map((option) => (
    <button
      key={option.id}
      id={option.id}
      onClick={() => handleClick(option)}
      disabled={disabledButtons}
    >
      {option.name}
    </button>
  ));

  return <div>{markup}</div>;
};

export default YNOptions;
