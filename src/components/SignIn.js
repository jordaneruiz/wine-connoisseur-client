import React, { useEffect } from "react";
import "../StyleSheet/signin.css";
// import "../StyleSheet/App.css";

export default function SignIn(props) {
  //props.errorMessage
  useEffect(() => {
    return props.onUnmount;
  }, []);

  return (
    <body>
    <div class="container centerDiv">
    <h2 class="login-title">Welcome Back</h2>
    <p class="">Log in to your account using email and password</p>

    <form class="login-form">        
      <div>
        <label for="email">Email </label>
        <input
               id="email"
               type="email"
               placeholder="me@example.com"
               name="email"
               required
               />
      </div>

      <div>
        <label for="password">Password </label>
        <input
               id="password"
               type="password"
               placeholder="password"
               name="password"
               required
               />
      </div>

      <button class="btn btn--form" type="submit" value="Log in">
        Log in
      </button>
      {/* {props.errorMessage ? (
        <p style={{ color: "red" }}>{props.errorMessage}</p>
      ) : null} */}
      <p className=""><a href="#">Forgot Password</a></p>
      <p className="">Don't have an account yet? <a href="#">Signup!</a></p>
    </form>
</div>
</body>
  );
}
