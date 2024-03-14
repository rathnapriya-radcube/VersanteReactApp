import React, { useContext } from "react";
import logo from "../assets/images/profile.jpg"; // Import the image
import { useState } from "react";
import { usePageContext } from "../PageContext";

const Header = (props) => {
  const botName = "OSMs Buddy";
  const { page, setPage } = usePageContext();
  console.log("Header props", props, "page");
  //   const [page, setPage] = useState("Survey");
  // props.state.page === "welcome"
  const handleWelcomeToolTip = () => {};
  const handleSurveyToolTip = () => {};
  return (
    <>
      {page === "Welcome" ? (
        <div className="header-outer-div-welcome-page">
          <p className="header-para-welcome-page"> {botName} </p>
          <button
            className="tooltip-button-welcome-page"
            onClick={handleWelcomeToolTip}
          >
            🛈
          </button>
        </div>
      ) : (
        <div className="header-outer-div-survey-page">
          <p className="header-para-survey-page"> {botName}</p>
          <button
            className="tooltip-button-survey-page"
            onClick={handleSurveyToolTip}
          >
            🛈 How to Use?
          </button>
          <div class="image-outer-div-survey-page">
            <img className="image-survey-page" src={logo}></img>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
