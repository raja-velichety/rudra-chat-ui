import Chatbar from "../chat_bar/Chatbar";
import ChatArea from "../chat_area/ChatArea";
import Chatlist from "../chat_list/Chatlist";
import "./Chatbox.css";
import { useContext, useState } from "react";
import classNames from "classnames";
import { context } from "../App";

function Chatbox() {
  const { globalChatState, dispatchFunction } = useContext(context);
  const [messages, setMessages] = useState([]);
  return (
    <>
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
    </>
  );
}

export default Chatbox;
