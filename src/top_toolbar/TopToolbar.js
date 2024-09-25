import { useState } from "react";
import "./TopToolbar.css";
import classNames from "classnames";
import { context } from "../App";
import { useContext } from "react";

export default function TopToolbar(props) {
  const [newMessageToggle, setNewMessageToggle] = useState(false);
  const { globalChatState, dispatchFunction } = useContext(context);

  return (
    <>
      <div className="top-toolbar">
        <div className="logo-group">
          <h1 className="logo">Chats</h1>
        </div>
        <div className="sub-toolbar">
          <div className="new-chat-group">
            <button
              className="btn"
              onClick={() => {
                setNewMessageToggle(true);
              }}
            >
              💬
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "input-text-area",
          newMessageToggle ? "d-block" : "d-none"
        )}
      >
        <input
          type="text"
          className={classNames(
            "newchat",
            newMessageToggle ? "d-block" : "d-none"
          )}
          value={props.newchat}
          placeholder="Create new chat"
          onChange={(e) => props.setNewchat(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatchFunction({
                type: "addToChatList",
                payload: {
                  id: globalChatState.chatList.length + 1,
                  name: props.newchat,
                  email: "",
                  messageList: [],
                },
              });
              props.setNewchat("");
            }
          }}
        />
      </div>
    </>
  );
}
