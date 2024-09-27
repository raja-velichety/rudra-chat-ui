import axios from "axios";
import { useState } from "react";
import "./ChatToolbar.css";

export default function ChatToolbar(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchString, setSearchString] = useState("");

  function searchChat() {
    axios
      .post("http://localhost:8000/chat-api/search/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.log("Error response:", error.response);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log("Error message:", error.message);
        }
      });
  }
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">{props.chat?.name}</span>
        <form className="form-inline">
          {!showSearch ? (
            <button className="btn" onClick={() => setShowSearch(!showSearch)}>
              🔎
            </button>
          ) : (
            <input
              type="text"
              className="form-control"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchChat();
                }
              }}
            />
          )}
        </form>
      </nav>
    </>
  );
}
