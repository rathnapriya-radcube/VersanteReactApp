// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import logo from "../assets/images/profile.jpg"; // Import the image
import GeneralOptions from "./widgets/GeneralOptions";
import YNQuestions from "./widgets/YNQuestions";

const botName = "Versa OSM Buddy";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey there, I'm Versa, your OSM buddy. Your go-to shop for anything related to Oral, Sexual and Mental health awareness and care connections.  \n\n
    `,
      {
        withAvatar: false,
        delay: 0,
      }
    ),
    createChatBotMessage(
      `Simply spend 2-3 minutes to check your "Chance score" for guided awareness and timely care. Don't worry, your scores are totally confidential and anonymous. You can share the scores with your provider, only if you want. And remember, you can always delete this chat once you've got your "Chance score"! \n\n
  `,
      {
        withAvatar: false,
        delay: 200,
      }
    ),
    createChatBotMessage(
      `Go, get started by clicking "Opt in" or "Know More”`,
      { widget: "generalOptions", withAvatar: false, delay: 300 }
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#034efc",
    },
    chatButton: {
      backgroundColor: "#e6da85",
    },
  },
  state: {
    questionList: [
      {
        questionNumber: 1,
        answer: "Unanswered",
        question: "What is your name?",
        skippable: false,
        branching: {
          yes: 2,
          no: 3,
        },
      },
      {
        questionNumber: 2,
        answer: "Unanswered",
        question: "What is your age?",
        skippable: false,
        branching: {},
      },
      {
        questionNumber: 3,
        answer: "Unanswered",
        question: "What is your occupation?",
        skippable: false,
        branching: {},
      },
    ],
    currentQuestion: 1,
  },
  widgets: [
    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "ynQuestion",
      widgetFunc: (props) => <YNQuestions {...props} />,
    },
  ],
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        style={{
          backgroundColor: "#034efc",
          padding: "35px",
          // borderBottomLeftRadius: "15px",
          // borderBottomRightRadius: "15px",
          color: "white",
        }}
      >
        {botName}
        <img
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "100px",
            marginTop: "5px",
          }}
          src={logo}
        ></img>
      </div>
    ),
    //  // Replaces the default bot avatar
    botAvatar: (props) => <></>,
    //  // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    //  // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,
    //  // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default config;
