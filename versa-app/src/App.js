import "./App.css";
import React, { useState, createContext, useContext } from "react";
import { PageContext } from "./PageContext.js";
import ChatBotComponent from "./ChatbotComponent.js";
function App() {
  const [page, setPage] = useState("Welcome");
  console.log("hello");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div className="App">
        <p>Hello</p>
        <ChatBotComponent />
      </div>
    </PageContext.Provider>
  );
}
export default App;
