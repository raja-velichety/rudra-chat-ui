import classNames from "classnames";
import "./ChatArea.css";
function ChatArea(props) {
  return (
    <>
      <div className="chatter">
        <div
          className={classNames(
            "chatter-top",
            !!props.profile_name ? "d-block" : "d-none"
          )}
        >
          <h1 className="chat-profile-name">{props.profile_name}</h1>
          <caption classNames="chat-last-seen">{props.last_seen}</caption>
        </div>
        {props.clist.map((cur_item, index) => {
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
      </div>
    </>
  );
}

export default ChatArea;
