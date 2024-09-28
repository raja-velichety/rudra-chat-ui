import { useContext, useState } from "react";
import { context } from "../../App";
import { postAPI } from "../../services/apiMethods";

function Chatbar(props) {
  const [message, setMessage] = useState("");
  const { globalChatState, dispatchFunction } = useContext(context);

  const addMessagesToChatID = (chat) => {
    const messageInfo = {
      // type: "string",
      // date: new Date().toLocaleDateString(),
      // time_stamp: new Date().toLocaleTimeString(),
      sender_id: globalChatState.userInfo.id,
      receiver_id: chat.chatInfo.id,
      data: message,
    };

    dispatchFunction({
      type: "addMessageToChatID",
      payload: messageInfo,
    });

    const url = "http://localhost:8000/chat-api/add-new-message/";

    const handleData = (data) => {
      console.log(data.data);
    };

    const data = messageInfo;

    postAPI(url, data, handleData);
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
