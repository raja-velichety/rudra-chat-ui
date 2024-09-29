import blankprofile from "../../assets/images/bp.png";
import TopToolbar from "./top_toolbar/TopToolbar";
import "../chat_list/Chatlist.css";
import { useState } from "react";

function Chatlist(props) {
  // useEffect(() => {
  //   const getActiveChat = () => {
  //     props?.setCurrentChat(
  //       props?.globalChatState?.Chatlist[
  //         props?.globalChatState?.currentActiveChat
  //       ]
  //     );
  //   };
  //   getActiveChat();
  // }, [props]);

  const [newChatToggle, setNewChatToggle] = useState(false);
  const [newChat, setNewChat] = useState("");
  const chatListOnClickHandler = (chat, chat_index) => {
    props.showChatbox();
    props.setCurrentChat(chat);
    props.dispatchFunction({
      type: "setCurrentActiveChat",
      payload: chat_index,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="chatlist">
          <TopToolbar
            newChatToggle={newChatToggle}
            setNewChatToogle={setNewChatToggle}
            newChat={newChat}
            setNewChat={setNewChat}
            {...props}
          />
          <div className="chatlist-display">
            {props?.chatlist?.length === 0 && !newChatToggle && (
              <div className="individual-chat">
                <p>No chats to Display. Click on new chat to get started</p>
              </div>
            )}
            {props?.chatlist?.map((chat, chat_index) => {
              return (
                <div
                  className="individual-chat"
                  key={chat_index}
                  onClick={() => {
                    chatListOnClickHandler(chat, chat_index);
                  }}
                >
                  <div className="col-md-3 chat-image-group">
                    <img
                      className="img-fluid rounded-circle img-thumbnail chat-image"
                      src={blankprofile}
                      alt="chat profile name"
                    />
                  </div>
                  <div className="col-md-9 chat-info-group">
                    <span className="chat-name">{chat?.chatInfo?.name}</span>
                    <span className="chat-email">{chat?.chatInfo?.email}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatlist;
