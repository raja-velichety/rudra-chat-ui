import { useContext } from "react";
import { context } from "../App";
import "./Navbar.css";

function Navbar(props) {
  const { dispatchFunction } = useContext(context);

  function chatUserSignOut() {
    dispatchFunction({ type: "removeLoggedIn" });
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Hello {props.gcs.userInfo.name}
        </span>
        <span className="navbar-text">
          <button className="btn btn-black" onClick={chatUserSignOut}>
            ⏻
          </button>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
