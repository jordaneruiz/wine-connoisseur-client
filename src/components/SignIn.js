import React, { useEffect } from "react";
import "../App.css";
import "./signin-style";

export default function SignIn(props) {
  //props.errorMessage
  useEffect(() => {
    return props.onUnmount;
  }, []);

  return (
    <form onSubmit={props.onSignIn}>


        <div class="container">
        <div class="left">
            <div class="header">
            <h2 class="animation a1">Welcome Back</h2>
            <h4 class="animation a2">Log in to your account using email and password</h4>
            </div>
            <div class="form">
            <input name="email" onChange={props.onUnmount} type="text" class="form-field animation a3" placeholder="Email Address"/>
            <input name="password" type="password" class="form-field animation a4" placeholder="Password"/>
            <p class="animation a5"><a href="#">Forgot Password</a></p>
            <button type="submit" class="animation a6">LOGIN</button>
            </div>
        </div>
        <div class="right-signin"></div>
        </div>

      {/* <div>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={props.onUnmount}
          type="text"
          classNameNameName="new-classNameName"
          id="exampleInputEmail1"
          name="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          classNameNameName="new-classNameName"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" classNameNameName="newclassNameName">
        Submit
      </button> */}

      

      {props.errorMessage ? (
        <p style={{ color: "red" }}>{props.errorMessage}</p>
      ) : null}


    </form>
  );
}
