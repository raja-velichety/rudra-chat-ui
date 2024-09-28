import blankprofile from "../../assets/images/bp.png";
import TopToolbar from "./top_toolbar/TopToolbar";
import "../chat_list/Chatlist.css";

function Chatlist(props) {
  const chatListOnClickHandler = (chat) => {
    //show Chatbox
    props.showChatbox();
    props.setCurrentChat(chat);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="chatlist">
          <TopToolbar {...props} />
          <div className="chatlist-display">
            {props?.chatlist?.map((chat, index) => {
              return (
                <div className="individual" key={index}>
                  <div
                    className="row"
                    onClick={() => {
                      chatListOnClickHandler(chat);
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
                        <span className="pchatname">
                          {chat?.chatInfo?.name}
                        </span>
                      </div>
                      <div className="row">
                        <span className="pchatemail">
                          {chat?.chatInfo?.email}
                        </span>
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
