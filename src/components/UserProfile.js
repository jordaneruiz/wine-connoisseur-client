import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Profile extends Component {
    
    state = {
        wines: [],
        }
    
      componentDidMount() {
        let id = this.props.match.params.id
          axios.get(`http://localhost:3040/api/profile/${id}`, {withCredentials: true})
          .then((wines) => {
            this.setState({
            wines: wines.data,
            })
          })
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

                <p>My current sales: {}</p>
        </div>

    )
  }
}
