import React, { Component } from "react";
import axios from "axios";
import {API_URL} from '../config'

export default class EditProfile extends Component {
  state = {
    profile: {},
  };

  componentDidMount() {
    //we want to retrieve the data from the user to be able to update it
    // let bottleId = this.props.match.params.bottleId
    axios
      .get(`${API_URL}/profile/edit`, { withCredentials: true })
      .then((response) => {
        console.log("response is: ", response);
        this.setState({
          wine: response.data,
        });
      });
  }

  usernameChange = (e) => {
    let cloneProfile = JSON.parse(JSON.stringify(this.state.profile));
    cloneProfile.username = e.target.value;
    this.setState({
      profile: cloneProfile,
    });
  };

  bioChange = (e) => {
    let cloneProfile = JSON.parse(JSON.stringify(this.state.profile));
    cloneProfile.bio = e.target.value;
    this.setState({
      profile: cloneProfile,
    });
  };

  locationChange = (e) => {
    let cloneProfile = JSON.parse(JSON.stringify(this.state.profile));
    cloneProfile.location = e.target.value;
    this.setState({
      profile: cloneProfile,
    });
  };

  render() {
    const { username, bio, location } = this.state.profile;

    return (
      <div className="body">
        In edit profile page
        <form>
          <div className="container">
            <div className="left">
              <div className="header">
                <h2 className="animation a1">Time to customize your profile!</h2>
                <h4 className="animation a2">Make it desirable!</h4>
              </div>
              <div className="form">
              <input onChange={this.usernameChange}
                  value={username}
                  className="form-field animation a3"
                  name="username"
                  type="text"
                  placeholder="Enter a new username"
                ></input>
                <input onChange={this.bioChange}
                  className="form-field animation a4"
                  value={bio}
                  name="bio"
                  type="text"
                  placeholder="Enter bio description"
                ></input>
                <input onChange={this.locationChange}
                  className="form-field animation a5"
                  value={location}
                  name="location"
                  type="text"
                  placeholder="Enter location"
                ></input>
              </div>
              <button 
            onClick={(e) => {this.props.onEdit(e, this.state.profile)}}
            className="form-field btn-hover color-11 animation a6"
            type="submit"
          >
            Save
          </button>
            </div>
            {/* <div className="right-add"></div> */}
          </div>
        </form>
        <div>
          
        </div>
      </div>
    );
  }
}
