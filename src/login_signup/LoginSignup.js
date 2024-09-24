import Login from "./Login";
import "./LoginSignup.css";
import Register from "./Register";
import { context } from "../App";
import { useContext } from "react";
export default function LoginSignup(props) {
  const { globalChatState } = useContext(context);
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Welcome to Rudra</h2>
          <p>Login or register from here to chat</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-8 col-sm-12">
          <div className="login-form card p-4">
            {!!globalChatState?.isRegistered && <Login />}
            {!globalChatState?.isRegistered && <Register />}
          </div>
        </div>
      </div>
    </>
  );
}
