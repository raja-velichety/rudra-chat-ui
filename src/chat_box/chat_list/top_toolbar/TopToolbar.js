import { useState } from "react";
import "./TopToolbar.css";
import classNames from "classnames";
import { context } from "../../../App";
import { useContext } from "react";
import { getAPI } from "../../../services/apiMethods";

export default function TopToolbar(props) {
  const { globalChatState, dispatchFunction } = useContext(context);

  async function checkUser() {
    const url =
      "http://localhost:8000/chat-api/check-user-is-registered/" +
      props.newChat;

    const handleData = (data) => {
      const currentChat = data.data;

      dispatchFunction({
        type: "addToChatList",
        payload: currentChat,
      });
    };

    await getAPI(url, handleData);
  }

  async function checkIfUserIsInChatList() {
    const chats = await globalChatState.chatList.filter((chat) => {
      if (
        chat.email.toLowerCase().startsWith(props.newChat.toLowerCase()) ===
        true
      ) {
        return chat;
      }
      return "";
    });

    return chats;
  }

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
                props.setNewChatToogle(() => !props.newChatToggle);
              }}
            >
              💬
            </button>
          </div>
        </div>
      </div>
      <div className={classNames(props.newChatToggle ? "d-flex" : "d-none")}>
        <input
          type="text"
          className={classNames("newchat")}
          value={props.newChat}
          placeholder="Create new chat"
          onChange={(e) => {
            props.setNewChat(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkUser();
              props.setNewChat("");
            } else {
              checkIfUserIsInChatList();
            }
          }}
        />
      </div>
    </>
  );
}
