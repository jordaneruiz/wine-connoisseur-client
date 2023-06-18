import React, { useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheet/signin.css";

export default function SignUp(props) {

    useEffect(() => {
        return props.onUnmount;
      }, []);


  return (
    <body>
    <div class="container centerDiv">
    <h2 class="login-title">Welcome</h2>
    <p class="SignupTilte">Sign up to create a new account and access unlimited outstanding wines!</p>

    <form class="login-form">     
    <div>
        <label for="text">Name </label>
        <input
               id="name"
               type="name"
               placeholder="Your name"
               name="name"
               required
               />
      </div>  
      <div>
        <label for="text">City </label>
        <input
               id="city"
               type="city"
               placeholder="Your location"
               name="city"
               required
               />
      </div>    
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

// export default useNavigate(SignUp);
