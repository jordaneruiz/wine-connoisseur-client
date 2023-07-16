import React, { useEffect } from "react";
import "../StyleSheet/signin.css";
// import "../StyleSheet/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SignIn(props) {
  //props.errorMessage
  useEffect(() => {
    return props.onUnmount;
  }, []);

  return (
    <body>
    <div className="container centerDiv">
    {/* <FontAwesomeIcon icon="fa-duotone fa-lock" style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#c12f46",}} /> */}
    <h2 className="login-title">Welcome Back</h2>
    <p className="text">Log in to your account using email and password</p>
    <form className="login-form">        
      <div>
        {/* <label for="email">Email </label> */}
        <input
               id="email"
               type="email"
               placeholder="me@example.com"
               name="email"
               required
               />
      </div>

      <div>
        {/* <label for="password">Password </label> */}
        <input
               id="password"
               type="password"
               placeholder="Password"
               name="password"
               required
               />
      </div>

      <button className="btn btn--form" type="submit" value="Log in">
        Log in
      </button>
      {/* {props.errorMessage ? (
        <p style={{ color: "red" }}>{props.errorMessage}</p>
      ) : null} */}
      <p className="text"><a href="#">Forgot Password</a></p>
      <p className="text">Don't have an account yet? <a href="#">Signup!</a></p>
    </form>
</div>
</body>
  );
}
