import "./ChatArea.css";
import { useEffect, useRef } from "react";
import ChatToolbar from "../chat_toolbar/ChatToolbar";

function ChatArea(props) {
  const chatareaBottomRef = useRef(null);

  useEffect(() => {
    chatareaBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.globalChatState.chatList]);
  return (
    <>
      <div className="chat-area">
        <ChatToolbar chat={props.currentChat} />
        {props?.currentChat?.messageList?.map((cur_item, index) => {
          return (
            <div className="row chatrow" key={index}>
              <span className="bubble blue-bubble">{cur_item.data}</span>
            </div>
          );
        })}
        <div id="chatarea-bottom-reference" ref={chatareaBottomRef} />
      </div>
    </>
  );
}

export default ChatArea;
