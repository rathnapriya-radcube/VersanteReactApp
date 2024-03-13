import React from "react";
import smileyPic from "../assets/images/smiley-pic.png"; // Import the image
import versaLogo from "../assets/images/versa-logo.png"; // Import the image
import "../styles/styles.css";
const CustomMessage = () => {
  return (
    <div className="outer-wrapper">
      <div className="outer-container">
        <div className="image-container">
          <img src={versaLogo}></img>
        </div>
        <div className="chat-body-container">
          <div className="profile-image-container">
            <img src={smileyPic}></img>
          </div>
          <div className="welcome-card">
            <h3>Let's get you started</h3>
            <p>
              I will help you check your "Oral, Sexual and Mental health
              interconnections, and it's "chance scores" for guided testing and
              care connections.
              <br></br>
              Spend only 6-10 minutes with me to get your chance score.
              Although, some questions may require more time and attention.
            </p>
            <button
              key="get-started"
              id="get-started"
              className="get-started-class"
            >
              Get your Chance Score now
            </button>
            <button key="know-more" id="know-more" className="know-more-class">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMessage;
