import { useContext, useState } from "react";
import { context } from "../App";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../services/apiMethods";

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

    const url = "http://localhost:8000/chat-api/login-chat-user/";

    const handleData = (data) => {
      if (data.isLoggedIn === "True") {
        dispatchFunction({
          type: "getUserInfo",
          payload: [...JSON.parse(data.userInfo)][0],
        });
        dispatchFunction({ type: "setIsLoggedIn", payload: true });
        dispatchFunction({ type: "setIsRegistered", payload: true });
      }
    };

    postAPI(url, data, handleData);
    navigate("/");
  }

  return (
    <>
      {/* {!!isError && (
        <ErrorMessage message={"Please Check your Login Credentials"} />
      )} */}
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
