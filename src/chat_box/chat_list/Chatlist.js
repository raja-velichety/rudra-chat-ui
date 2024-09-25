import blankprofile from "../../assets/images/bp.png";
import { useState } from "react";
import TopToolbar from "./top_toolbar/TopToolbar";
import "../chat_list/Chatlist.css";

function Chatlist(props) {
  const [newchat, setNewchat] = useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="chatlist">
          <TopToolbar setNewchat={setNewchat} newchat={newchat} {...props} />
          <div className="chatlist-display">
            {props.chatlist?.map((individual, index) => {
              return (
                <div className="individual" key={index}>
                  <div
                    className="row"
                    onClick={() => {
                      props.showChatbox();
                      props.setMessages([...individual.messageList]);
                    }}
                  >
                    <div className="col-md-3">
                      <img
                        className="img-fluid rounded-circle img-thumbnail"
                        src={blankprofile}
                        alt="chat profile name"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <span className="pchatname">{individual.name}</span>
                      </div>
                      <div className="row">
                        <span className="pchatemail">{individual.email}</span>
                      </div>
                    </div>
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
