import "./App.css";
import Chatbox from "../src/chat_box/Chatbox";
import LoginSignup from "./login_signup/LoginSignup";
import { useReducer } from "react";
import {
  baseChatState,
  centralReducerFunction,
} from "./services/globalStateFunctionality";
import { createContext } from "react";

export const context = createContext(null);

function App() {
  const [globalChatState, dispatchFunction] = useReducer(
    centralReducerFunction,
    baseChatState
  );

  return (
    <context.Provider value={{ globalChatState, dispatchFunction }}>
      <div className="App">
        {!!globalChatState?.isLoggedIn && <Chatbox context={context} />}
        {!globalChatState?.isLoggedIn && <LoginSignup context={context} />}
      </div>
    </context.Provider>
  );
}

export default App;
