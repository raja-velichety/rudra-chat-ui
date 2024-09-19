import "./App.css";
import Chatbox from "../src/chat_box/Chatbox";
import LoginSignup from "./login_signup/LoginSignup";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">{!!isLoggedIn ? <Chatbox /> : <LoginSignup />}</div>
  );
}

export default App;
