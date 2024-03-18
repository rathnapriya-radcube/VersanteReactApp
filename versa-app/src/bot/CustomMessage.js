import React from "react";
import smileyPic from "../assets/images/smiley-pic.png"; // Import the image
import versaLogo from "../assets/images/versa-logo.png"; // Import the image
import "../styles/styles.css";
const CustomMessage = (props) => {
  console.log("custom message", props);

  const displayTranslate = () => {
    console.log("Calling Display Translate 2");
    console.log("doc2", document);
    const translateButton = document.createElement("button");
    // translateButton.href = "https://example.com";
    translateButton.className = "translate-button";
    const translateImage = document.createElement("img");
    translateImage.src = "image.jpg";
    translateImage.className = "translate-button-icon";

    translateButton.appendChild(translateImage);
    const chatInput = document.getElementsByClassName(
      "react-chatbot-kit-chat-input"
    )[0];
    console.log("chatinput", chatInput);
    chatInput.parentNode.insertBefore(translateButton, chatInput);
  };

  let showKnowMoreToolTip = false;
  const displayToolTip = () => {
    console.log(" displayToolTip showKnowMoreToolTip", showKnowMoreToolTip);
    if (showKnowMoreToolTip) {
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = true;
      const containerA = document.createElement("div");
      containerA.id = "containerA"; // Assign ID to container A
      const heading = document.createElement("h2");
      heading.id = "know-more-heading"; // Assign ID to heading
      const paragraph = document.createElement("div");
      paragraph.id = "paragraph"; // Assign ID to paragraph
      const paragraphElement = document.createElement("p");
      paragraphElement.id = "know-more-paragraph-element";
      paragraphElement.innerHTML =
        'OSM chance score" is a simple evaluation of Oral, Sexual and Mental health and that unlocks the chance of interconnected risks. Assess your Chance Score anonymously and delete your score once you receive it, anytime, anywhere. <br /><br />Also avail assistance on timely screenings, free tests, and peer education sessions. Don\'t miss out on your "chance” to be on top of your OSM game! ';
      const button = document.createElement("button");
      button.id = "know-more-button"; // Assign ID to button
      button.addEventListener("click", () => {
        console.log("Button click", showKnowMoreToolTip);
        handleKnowMoreClick();
      });
      // Set content
      heading.textContent = "What is OSM Chance Score?";
      button.textContent = "Dismiss";

      // Append elements to container A
      containerA.appendChild(heading);
      paragraph.appendChild(paragraphElement);
      containerA.appendChild(paragraph);
      containerA.appendChild(button);

      // Get parent of container B
      const parentOfB = document.getElementsByClassName(
        "react-chatbot-kit-chat-input-container"
      )[0].parentNode;

      // Attach container A after container B
      parentOfB.insertBefore(
        containerA,
        document.getElementsByClassName(
          "react-chatbot-kit-chat-input-container"
        )[0].nextSibling
      );
    } else {
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = false;
      const containerA = document.getElementById("containerA");

      if (containerA) {
        containerA.parentNode.removeChild(containerA);
      }
    }
  };
  const handleKnowMoreClick = () => {
    console.log("handleKnowMoreClick ", showKnowMoreToolTip);
    showKnowMoreToolTip = !showKnowMoreToolTip;
    setTimeout(displayToolTip, 0);

    // setShowToolTip((prevState) => !prevState);

    // Call displayToolTip after state has been updated
  };
  const handleGetStarted = () => {
    console.log("Called handleGetStarted");
    let outerWrapperContainer =
      document.getElementsByClassName("outer-wrapper")[0];
    console.log("Before", outerWrapperContainer);
    outerWrapperContainer.style.display = "none";
    console.log("After", outerWrapperContainer);
    let initialPaddingDiv = document.createElement("div");
    initialPaddingDiv.style.padding = "20px";
    initialPaddingDiv.style.backgroundColor = "#cdc7e3fd";
    outerWrapperContainer.insertAdjacentElement("afterend", initialPaddingDiv);
    props.actions.handleOptIn();
  };
  // const handleKnowMoreClick = () => {
  //   console.log("Called handleKnowMoreClick");
  //   let outerWrapperContainer =
  //     document.getElementsByClassName("outer-wrapper")[0];
  //   console.log("Before", outerWrapperContainer);
  //   outerWrapperContainer.style.display = "none";
  //   console.log("After", outerWrapperContainer);
  //   let initialPaddingDiv = document.createElement("div");
  //   initialPaddingDiv.style.padding = "20px";
  //   initialPaddingDiv.style.backgroundColor = "#cdc7e3fd";
  //   outerWrapperContainer.insertAdjacentElement("afterend", initialPaddingDiv);
  //   // props.actions.handleKnowMore();
  // };
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
              <br></br>
              Spend only 6-10 minutes with me to get your chance score.
              Although, some questions may require more time and attention.
            </p>
            <button
              key="get-started"
              id="get-started"
              className="get-started-class"
              onClick={handleGetStarted}
            >
              Get your Chance Score now
            </button>
            <button
              key="know-more"
              id="know-more"
              className="know-more-class"
              onClick={handleKnowMoreClick}
            >
              Know More
            </button>
          </div>
          {console.log("call disp")}
          {displayTranslate()}
        </div>
      </div>
    </div>
  );
};

export default CustomMessage;
