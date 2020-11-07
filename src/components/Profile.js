import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Profile extends Component {
    state = {
        profile: null
     }
     componentDidMount(){
        //somecode
        if(!this.state.profile) {
            axios.get(`http://localhost:3040/api/profile`)
            .then((resp) => {
                console.log("resp is : ", resp)
                this.setState({
                    profile: resp.data
                })
            })
        }
     }



  render() {

    const {username, bio} = this.state.profile

    return (

        <div>
                <p>Name: {username}</p>
                <p>Bio: {bio}</p>
        </div>

    )
  }
}
