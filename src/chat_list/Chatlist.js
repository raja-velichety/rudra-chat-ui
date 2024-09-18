import blankprofile from "../assets/images/bp.png";
import { useState } from "react";
import TopToolbar from "../top_toolbar/TopToolbar";
function Chatlist(props) {
  const [newchat, setNewchat] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="chatlist">
          <TopToolbar setNewchat={setNewchat} newchat={newchat} {...props} />
          <div className="chatlist-display">
            {props.chatlist.map((individual) => {
              return (
                <div className="individual">
                  <div
                    className="row"
                    onClick={() => alert(individual + " is selected")}
                  >
                    <div className="col-md-3">
                      <img
                        className="img-fluid rounded-circle img-thumbnail"
                        src={blankprofile}
                        alt="chat profile name"
                      />
                    </div>
                    <div className="col-md-9">
                      <span className="pchat">{individual}</span>
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
