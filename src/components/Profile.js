import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Profile extends Component {
    state = {
        profile: null,
        // wines: [],
     }


     componentDidMount(){
        //somecode
        const {loggedInUser} = this.props

        if(!this.state.profile) {
            axios.get(`http://localhost:3040/api/profile`/*, {withCredentials: true}*/)
            .then((resp) => {
                console.log("resp is : ", resp)
                console.log("loggedInUser is: ", loggedInUser)
                this.setState({
                    profile: resp.data
                })
            })
        }
     }

    // componentDidMount() {
    //     let id = this.props.match.params.id
    //       axios.get(`http://localhost:3040/api/profile/:userId`, {withCredentials: true})
    //       .then((wines) => {
    //         this.setState({
    //         wines: wines.data,
    //         })
    //       })
    //     }



  render() {
    const {loggedInUser, username} = this.props
    // const {username} = this.state.profile

    if (!loggedInUser){
        return <Redirect to={'/sign-in'}/>
    }

    return (

        <div className="profile">
                <p>Name: {loggedInUser.username}</p>
                <p>Bio: {loggedInUser.bio}</p>
                <p>Bio: {loggedInUser.bio}</p>
                userSeller: newUser,

                <p>My current slaes: {}</p>
        </div>

    )
  }
}