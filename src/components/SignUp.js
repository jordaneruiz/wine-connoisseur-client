import React, { useEffect }  from "react";
import { withRouter } from "react-router-dom";

function SignUp(props) {

    useEffect(() => {
        return props.onUnmount;
      }, []);


  return (
    <section className="margin-form">
      <form onSubmit={props.onSignUp}>
        <div className="container">
          <div className="left">
            <div className="header">
              <h2 className="animation a1">Welcome | Create an account</h2>
              <h4 className="animation a2">Create your account in a minute</h4>
            </div>
            <div className="form">
              <input
                name="username"
                type="text"
                className="form-field animation a3"
                placeholder="Username"
              />
              <input
                name="email"
                type="text"
                className="form-field animation a4"
                placeholder="Email Address"
              />
              <input
                name="password"
                type="password"
                className="form-field animation a5"
                placeholder="Password"
              />
              {/* <p class="animation a5"><a href="#">Forgot Password</a></p> */}
              {/* <button type="submit" class="animation a6">LOGIN</button> */}
              <div class="bbuttons">
                <button
                  type="submit"
                  className="btn-hover color-11 animation a6"
                >
                  Sign Up
                </button>
              </div>
              {props.errorMessage ? (
                <p style={{ color: "red" }}>{props.errorMessage}</p>
              ) : null}
            </div>
          </div>
          <div class="right-signup"></div>
        </div>
      </form>
    </section>
  );
}

export default withRouter(SignUp);
