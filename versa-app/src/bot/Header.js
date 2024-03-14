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
  return (
    <>
      {page === "Welcome" ? (
        <div className="header-outer-div-welcome-page">
          <p className="header-para-welcome-page"> {botName} </p>
        </div>
      ) : (
        <div className="header-outer-div-survey-page">
          <p className="header-para-survey-page"> {botName}</p>
          <img className="image-survey-page" src={logo}></img>
        </div>
      )}
    </>
  );
};

export default Header;
