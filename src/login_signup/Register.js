import { useContext, useState } from "react";
import { context } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { dispatchFunction } = useContext(context);
  const [chatname, setChatName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [validatePwd, setValidatePwd] = useState("");

  function checkPwdCPwdIsEqual() {
    if (pwd !== confirmPwd) {
      setValidatePwd("password and confirm password doesn't match");
      return false;
    }

    setValidatePwd("password and confirm password match");
    return true;
  }

  function registerChatUser(e) {
    e.preventDefault();
    if (checkPwdCPwdIsEqual) {
      const data = {
        name: chatname,
        email: email,
        password: pwd,
        phonenumber: phonenumber,
      };
      axios
        .post("http://localhost:8000/chat-api/register-chat-user/", {
          data,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
        })
        .then((response) => response.data)
        .then((data) => {
          dispatchFunction({ type: "isRegistered", payload: true });
          navigate("/");
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
  }

  return (
    <>
      <form onSubmit={registerChatUser}>
        <div className="form-group">
          <label htmlFor="chatname" className="label">
            Name
          </label>
          <input
            type="text"
            name="chatname"
            className="form-control"
            placeholder="Enter User Name"
            value={chatname}
            onChange={(e) => setChatName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            EmailID
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Phone number
          </label>
          <input
            type="tel"
            name="phonenumber"
            className="form-control"
            placeholder="Enter Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            placeholder="confirm password"
            value={confirmPwd}
            onChange={(e) => {
              setConfirmPwd(e.target.value);
            }}
          />
          <label
            style={{
              color: checkPwdCPwdIsEqual ? "green" : "red",
              padding: "0.5rem",
            }}
          >
            {validatePwd}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <button
        className="link-button"
        onClick={(e) => {
          e.preventDefault();
          dispatchFunction({ type: "setIsRegistered", payload: true });
        }}
      >
        already registered? please login from here
      </button>
    </>
  );
}
