import { useState } from "react";
import "./TopToolbar.css";
import classNames from "classnames";
import { context } from "../../../App";
import { useContext } from "react";
import ModalComponent from "../../../basic_components/ModalComponent";

import { getAPI } from "../../../services/apiMethods";

export default function TopToolbar(props) {
  const [newMessageToggle, setNewMessageToggle] = useState(false);
  const { globalChatState, dispatchFunction } = useContext(context);
  const [newChat, setNewChat] = useState("");

  async function checkUser() {
    const url =
      "http://localhost:8000/chat-api/check-user-is-registered/" + newChat;

    const handleData = (data) => {
      const currentChat = [...JSON.parse(data.data)][0];

      dispatchFunction({
        type: "addToChatList",
        payload: [{ ...currentChat, messageList: [], index: 3 }],
      });
    };
    await getAPI(url, handleData);
  }

  async function checkIfUserIsInChatList() {
    const chats = await globalChatState.chatList.filter((chat) => {
      if (chat.email.toLowerCase().startsWith(newChat.toLowerCase()) === true) {
        console.log(newChat.toLowerCase() + " " + true);
        return chat;
      }
      return "";
    });

    console.log(chats);
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
                setNewMessageToggle(true);
                <ModalComponent />;
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
          value={newChat}
          placeholder="Create new chat"
          onChange={(e) => {
            setNewChat(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkUser();
            } else {
              checkIfUserIsInChatList();
            }
          }}
        />
      </div>
    </>
  );
}
