import React from "react";
import { Link } from "react-router-dom";

export default function NaviBar(props) {
  return (
    <div>
      <Link to="/">Home</Link>

      { props.loggedInUser ? (
        <button onClick={props.onLogout}>Logout</button>
      ) : (
        <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </>
      )}
      {/* <Link to="/Sign-in">Sign In</Link>
            <Link to="/Sign-up">Sign Up</Link>
            <button>Logout</button> */}
    </div>
  );
}
