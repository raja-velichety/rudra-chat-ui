import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LoginSignup from "../login_signup/LoginSignup";
import Chatbox from "../chat_box/Chatbox";
import Login from "../login_signup/Login";
import Register from "../login_signup/Register";

export const app_router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login-register/",
    element: <LoginSignup />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "/chat-box", element: <Chatbox /> },
]);
