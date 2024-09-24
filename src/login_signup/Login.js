import { useContext, useState } from "react";
import { context } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { dispatchFunction } = useContext(context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function loginChatUser(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: pwd,
    };

    axios
      .post("http://localhost:8000/chat-api/login-chat-user/", {
        data,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        if (data.isLoggedIn === "True") {
          dispatchFunction({ type: "setIsLoggedIn", payload: true });
          dispatchFunction({ type: "setIsRegistered", payload: true });
          getChatList();
        }
      })
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
    navigate("/");
  }

  function getChatList() {
    axios
      .get("http://localhost:8000/chat-api/get-chats/")
      .then((data) => {
        return dispatchFunction({ type: "getChats", payload: data.data });
      })
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
      <form onSubmit={loginChatUser}>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="row">
          <button type="submit" className="btn btn-black mt-2">
            Login
          </button>
        </div>
        <button
          className="link-button"
          onClick={(e) => {
            e.preventDefault();
            dispatchFunction({ type: "setIsRegistered" });
          }}
        >
          New User? Signup here
        </button>
      </form>
    </>
  );
}
