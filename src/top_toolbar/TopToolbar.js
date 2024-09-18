import { useState } from "react";
import "./TopToolbar.css";
import classNames from "classnames";
export default function TopToolbar(props) {
  const [searchToggle, setSearchToggle] = useState(false);
  const [newMessageToggle, setNewMessageToggle] = useState(false);

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
                setSearchToggle(false);
              }}
            >
              💬
            </button>
          </div>
          <div className="search-group">
            <button
              className="btn"
              onClick={() => {
                setSearchToggle(true);
                setNewMessageToggle(false);
              }}
            >
              {" "}
              🔎
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "input-text-area",
          searchToggle || newMessageToggle ? "d-block" : "d-none"
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
              props.setChatlist([...props.chatlist, props.newchat]);
              props.setNewchat("");
            }
          }}
        />
        <input
          type="text"
          className={classNames("search", searchToggle ? "d-block" : "d-none")}
          value={props.newchat}
          placeholder="search"
          //   onChange={(e) => props.setNewchat(e.target.value)}
          //   onKeyDown={(e) => {
          //     if (e.key === "Enter") {
          //       props.setChatlist([...props.chatlist, props.newchat]);
          //       props.setNewchat("");
          //     }
          //   }}
        />
      </div>
    </>
  );
}
