import Chatbar from "./chat_bar/Chatbar";
import ChatArea from "./chat_area/ChatArea";
import Chatlist from "./chat_list/Chatlist";
import "./Chatbox.css";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { context } from "../App";
import Navbar from "../nav_bar/Navbar";
import ChatToolbar from "./chat_toolbar/ChatToolbar";
import { getAPI } from "../services/apiMethods";

function Chatbox() {
  const { globalChatState, dispatchFunction } = useContext(context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatList();
  });

  function showChatbox() {
    dispatchFunction({ type: "setShowChatbox", payload: true });
  }

  function getChatList() {
    const url = "http://localhost:8000/chat-api/get-chats/";
    const handleData = (data) => {
      return dispatchFunction({ type: "getChats", payload: data });
    };

    getAPI(url, handleData);
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="chat-container">
          <div className="row">
            <div className={classNames("col-md-3")}>
              <Chatlist
                chatlist={globalChatState?.chatList}
                dispatchFunction={dispatchFunction}
                messages={messages}
                setMessages={setMessages}
                showChatbox={showChatbox}
              />
            </div>
            <div
              className={classNames(
                globalChatState.showChatbox ? "d-block col-md-9" : "d-none"
              )}
            >
              <div className="chatbox row">
                <ChatToolbar />
                <ChatArea className="chatarea" clist={messages} />

                <Chatbar
                  className="chatbar"
                  setSinglechat={setMessages}
                  clist={messages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbox;
