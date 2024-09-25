import { useContext } from "react";
import { context } from "../App";
import "./Navbar.css";

function Navbar() {
  const { dispatchFunction } = useContext(context);

  function chatUserSignOut() {
    dispatchFunction({ type: "setIsLoggedIn", payload: false });
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="btn btn-black" onClick={chatUserSignOut}>
              ⏻
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
