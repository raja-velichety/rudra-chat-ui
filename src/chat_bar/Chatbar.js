import { useState } from "react";
function Chatbar(props) {
  const [message, setMessage] = useState("");
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
                  props.setSinglechat([...props.clist, message]);
                  setMessage("");
                }
              }}
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                props.setSinglechat([...props.clist, message]);
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
