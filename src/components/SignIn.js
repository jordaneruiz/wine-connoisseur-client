import React, {useEffect} from "react";

export default function SignIn(props) {
  //props.errorMessage
  useEffect(() => {
    return props.onUnmount;
  }, []);

  return (
    <form onSubmit={props.onSignIn}>
        <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={props.onUnmount} type="text" className="new-class" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
        </div>
        <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="password" type="password" className="new-class" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="newclass">Submit</button>

        {
            props.errorMessage ? (<p style={{color: "red"}}>{props.errorMessage}</p>) : null
        }
    </form>
)
}
