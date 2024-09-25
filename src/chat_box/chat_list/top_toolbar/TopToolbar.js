import { useState } from "react";
import "./TopToolbar.css";
import classNames from "classnames";
import { context } from "../../../App";
import { useContext } from "react";

import { getAPI } from "../../../services/apiMethods";

export default function TopToolbar(props) {
  const [newMessageToggle, setNewMessageToggle] = useState(false);
  const { dispatchFunction } = useContext(context);
  const [newChat, setNewChat] = useState();

  function checkUser() {
    const url =
      "http://localhost:8000/chat-api/check-user-is-registered/" + newChat;

    const handleData = (data) => {
      dispatchFunction({
        type: "checkIfUserIsRegistered",
        payload: JSON.parse(data.data),
      });
    };
    getAPI(url, handleData);
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
          onChange={(e) => setNewChat(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkUser();
            }
          }}
        />
      </div>
    </>
  );
}
