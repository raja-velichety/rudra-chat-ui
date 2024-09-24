import Chatbar from "../chat_bar/Chatbar";
import ChatArea from "../chat_area/ChatArea";
import Chatlist from "../chat_list/Chatlist";
import "./Chatbox.css";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { context } from "../App";
import axios from "axios";
import Navbar from "../nav_bar/Navbar";

function Chatbox() {
  const { globalChatState, dispatchFunction } = useContext(context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatList();
  });

  function getChatList() {
    axios
      .get("http://localhost:8000/chat-api/get-chats/")
      .then((data) => {
        return dispatchFunction({ type: "getChats", payload: data.data });
      })
      .catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.log("Error response:", error.response);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log("Error message:", error.message);
        }
      });
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <div
            className={classNames(
              globalChatState?.chatList?.length > 0 ? "col-md-3" : "col-md-12"
            )}
          >
            <Chatlist
              chatlist={globalChatState?.chatList}
              dispatchFunction={dispatchFunction}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
          <div
            className={classNames(
              "col-md-9",
              messages?.length >= 0 ? "d-block" : "d-none"
            )}
          >
            <div className="cbox">
              <div className="chatbox row">
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
