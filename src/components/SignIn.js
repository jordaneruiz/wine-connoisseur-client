import React, { useEffect } from "react";
import "../App.css";
import "./signin-style";

export default function SignIn(props) {
  //props.errorMessage
  useEffect(() => {
    return props.onUnmount;
  }, []);

  return (
    <section className="margin-form">
    <form onSubmit={props.onSignIn}>
        <div className="container">
        <div className="left">
            <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">Log in to your account using email and password</h4>
            </div>
            <div className="form">
            <input name="email" onChange={props.onUnmount} type="text" className="form-field animation a3" placeholder="Email Address"/>
            <input name="password" type="password" className="form-field animation a4" placeholder="Password"/>
            <p className="animation a5"><a href="#">Forgot Password</a></p>
            {/* <button type="submit" className="animation a6">LOGIN</button> */}
            <div className="bbuttons"><button type="submit" className="btn-hover color-11 animation a6">LOGIN</button></div>
            </div>
        </div>
        <div className="right-signin"></div>
        </div>

      {/* <div>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={props.onUnmount}
          type="text"
          classNameNameNameName="new-classNameNameName"
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
          classNameNameNameName="new-classNameNameName"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" classNameNameNameName="newclassNameNameName">
        Submit
      </button> */}

      

      {props.errorMessage ? (
        <p style={{ color: "red" }}>{props.errorMessage}</p>
      ) : null}


    </form>
    </section>
  );
}
