import classNames from "classnames";
import "./ChatArea.css";
import { useEffect, useRef } from "react";

function ChatArea(props) {
  const chatareaBottomRef = useRef(null);

  useEffect(() => {
    chatareaBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.clist]);
  return (
    <>
      <div className="chat-area">
        <div
          className={classNames(
            "chat-area-top",
            !!props.currentChat.name ? "d-block" : "d-none"
          )}
        >
          <h1 className="chat-profile-name">{props.currentChat.name}</h1>
        </div>
        {props?.currentChat?.messageList?.map((cur_item, index) => {
          return (
            <div className="row chatrow">
              <span
                className={
                  index % 2 === 0 ? "green-bubble" : "bubble blue-bubble"
                }
                key={index}
              >
                {cur_item}
              </span>
            </div>
          );
        })}
        <div id="chatarea-bottom-reference" ref={chatareaBottomRef} />
      </div>
    </>
  );
}

export default ChatArea;
