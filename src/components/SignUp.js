import React from 'react';
import {withRouter} from 'react-router-dom'

function SignUp(props){
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
                    <input name="username" type="text" className="form-field animation a3" placeholder="Username"/>
                    <input name="email" type="text" className="form-field animation a4" placeholder="Email Address"/>
                    <input name="password" type="password" className="form-field animation a5" placeholder="Password"/>
                    {/* <p class="animation a5"><a href="#">Forgot Password</a></p> */}
                    {/* <button type="submit" class="animation a6">LOGIN</button> */}
                    <div class="bbuttons"><button type="submit" className="btn-hover color-11 animation a6">Sign Up</button></div>
                    </div>
                </div>
                <div class="right-signup"></div>
                </div>
            {/* <div className="">
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
            <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>
        </section>
    )
}

export default withRouter(SignUp)