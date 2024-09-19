import Login from "./Login";
import "./LoginSignup.css";
import { useState } from "react";
import Register from "./Register";
export default function LoginSignup(props) {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Welcome to Rudra</h2>
          <p>
            Login or register from here to chat with one and only kishan trivedi
            and raja
          </p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-8 col-sm-12">
          <div className="login-form card p-4">
            {!!isRegistered && (
              <Login
                setIsRegistered={setIsRegistered}
                isRegistered={isRegistered}
              />
            )}
            {!isRegistered && (
              <Register
                setIsRegistered={setIsRegistered}
                isRegistered={isRegistered}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
