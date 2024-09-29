import Chatbar from "./chat_bar/Chatbar";
import ChatArea from "./chat_area/ChatArea";
import Chatlist from "./chat_list/Chatlist";
import "./Chatbox.css";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { context } from "../App";
import Navbar from "../nav_bar/Navbar";
import { getAPI } from "../services/apiMethods";

function Chatbox() {
  const { globalChatState, dispatchFunction } = useContext(context);
  const [currentChat, setCurrentChat] = useState({});

  useEffect(() => {
    function getChatList() {
      const url =
        "http://localhost:8000/chat-api/get-chat-list/" +
        globalChatState?.userInfo?.id;
      const handleData = (data) => {
        return dispatchFunction({ type: "getChatList", payload: data.data });
      };

      getAPI(url, handleData);
    }

    getChatList();
  }, [globalChatState?.userInfo, dispatchFunction]);

  function showChatbox() {
    dispatchFunction({ type: "setShowChatbox", payload: true });
  }

  return (
    <>
      <div className="container">
        <Navbar gcs={globalChatState} />
        <div
          className={classNames(
            globalChatState?.showChatbox
              ? "chat-container"
              : "chat-container flex-center"
          )}
        >
          <div className="row">
            <div
              className={classNames(
                globalChatState?.showChatbox
                  ? "col-md-3 col-sm-12"
                  : "col-md-12 col-sm-12 only-chatlist-on-desktop"
              )}
            >
              <Chatlist
                chatlist={globalChatState?.chatList}
                dispatchFunction={dispatchFunction}
                globalChatState={globalChatState}
                showChatbox={showChatbox}
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
              />
            </div>
            <div
              className={classNames(
                globalChatState?.showChatbox ? "d-block col-md-9" : "d-none"
              )}
            >
              <div className="chatbox">
                <ChatArea
                  className="chatarea"
                  globalChatState={globalChatState}
                  currentChat={currentChat}
                  setCurrentChat={setCurrentChat}
                />

                <Chatbar
                  className="chatbar"
                  currentChat={currentChat}
                  setCurrentChat={setCurrentChat}
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
