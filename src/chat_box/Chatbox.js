import Chatbar from "../chat_bar/Chatbar";
import ChatArea from "../chat_area/ChatArea";
import Chatlist from "../chat_list/Chatlist";
import "./Chatbox.css";
import { useState } from "react";
import classNames from "classnames";

function Chatbox() {
  const [chatlist, setChatlist] = useState([]);
  const [singlechat, setSinglechat] = useState([]);

  return (
    <>
      <div className="container">
        <div
          className={classNames(chatlist.length > 0 ? "col-md-3" : "col-md-12")}
        >
          <Chatlist chatlist={chatlist} setChatlist={setChatlist} />
        </div>
        <div
          className={classNames(
            "col-md-9",
            chatlist.length > 0 ? "d-block" : "d-none"
          )}
        >
          <div className="cbox">
            <div className="chatbox row">
              <ChatArea className="chatarea" clist={singlechat} />
              <Chatbar
                className="chatbar"
                setSinglechat={setSinglechat}
                clist={singlechat}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbox;
