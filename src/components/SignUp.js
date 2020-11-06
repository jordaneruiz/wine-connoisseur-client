import React from 'react';
import {withRouter} from 'react-router-dom'

function SignUp(props){
    return (
        <form onSubmit={props.onSignUp}>
            <div className="">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="text" className="" id="exampleInputUsername" name="username" />
            </div>
            <div className="">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default withRouter(SignUp)