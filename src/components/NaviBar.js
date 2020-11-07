import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'

export default function NaviBar(props) {
  return (






<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <Link class="navbar-item" to="/" class="navbar-item">
      <img src="LOGO3.png" height="200"/>
  </Link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link class="navbar-item" to="/">Home</Link>
      <Link class="navbar-item" to={"/add-bottle"}>Sell</Link>


      <a class="navbar-item">
        Profile
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        { props.loggedInUser ? (
        <button class="button is-light" onClick={props.onLogout}>Logout</button>
      ) : (
        <>
          <Link class="button is-primary" to="/sign-in">Sign In</Link>
          <Link class="button is-primary" to="/sign-up">Sign Up</Link>
          </>
      )}
        </div>
      </div>
    </div>
  </div>
</nav>




      // {/* <Link to="/">Home</Link>

      // { props.loggedInUser ? (
      //   <button onClick={props.onLogout}>Logout</button>
      // ) : (
      //   <>
      //     <Link to="/sign-in">Sign In</Link>
      //     <Link to="/sign-up">Sign Up</Link>
      //   </>
      // )} */}
      // {/* <Link to="/Sign-in">Sign In</Link>
      //       <Link to="/Sign-up">Sign Up</Link>
      //       <button>Logout</button> */}
   
  );
}
