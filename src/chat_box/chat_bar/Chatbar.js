import { useContext, useState } from "react";
import { context } from "../../App";

function Chatbar(props) {
  const [message, setMessage] = useState("");
  const { globalChatState, dispatchFunction } = useContext(context);

  const addMessagesToChatID = (chat) => {
    const messageInfo = {
      type: "string",
      date: new Date().toLocaleDateString(),
      time_stamp: new Date().toLocaleTimeString(),
      sender_id: globalChatState.userInfo.id,
      receiver_id: chat.id,
      data: message,
    };
    return dispatchFunction({
      type: "addMessageToChatID",
      payload: messageInfo,
    });
  };

  return (
    <>
      <div className="chatbar">
        <div className="row">
          <div className="col-md-10">
            <input
              type="input"
              className="form-control"
              value={message}
              placeholder="Enter the message you want to send"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addMessagesToChatID(props.currentChat);
                  setMessage("");
                }
              }}
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                addMessagesToChatID(props.currentChat);
                setMessage("");
              }}
            >
              ➣
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbar;
