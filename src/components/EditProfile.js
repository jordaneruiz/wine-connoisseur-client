import React, { Component } from "react";
import axios from "axios";

export default class EditProfile extends Component {
  state = {
    profile: {},
  };

  componentDidMount() {
    //we want to retrieve the data from the user to be able to update it
    // let bottleId = this.props.match.params.bottleId
    axios
      .get(`http://localhost:3040/api//profile/edit`, { withCredentials: true })
      .then((response) => {
        console.log("response is: ", response);
        this.setState({
          wine: response.data,
        });
      });
  }

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
    const { bio, location } = this.state.profile;

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
                <input
                  onChange={this.priceChange}
                  className="form-field "
                  value={bio}
                  name="bio"
                  type="text"
                  placeholder="Enter bio description"
                ></input>
                <input
                  onChange={this.priceChange}
                  className="form-field "
                  value={location}
                  name="location"
                  type="text"
                  placeholder="Enter location"
                ></input>
              </div>
            </div>
            {/* <div className="right-add"></div> */}
          </div>
        </form>
        <div>
          <button
            onClick={() => {
              this.props.onEdit(this.state.profile);
            }}
            className="form-field btn-hover color-11 animation a12"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
