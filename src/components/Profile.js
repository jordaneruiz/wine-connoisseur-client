import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../config";
import { Card, Button } from "react-bootstrap";

export default class Profile extends Component {
  state = {
    profile: null,
    wines: [],
  };

  componentDidMount() {
    //somecode
    const { loggedInUser } = this.props;

    //fetch loggedin user information displayed on profile
    if (!this.state.profile) {
      axios
        .get(`${API_URL}/profile`, { withCredentials: true })
        .then((resp) => {
          console.log("resp is : ", resp);
          console.log("loggedInUser is: ", loggedInUser);
          this.setState({
            profile: resp.data,
          });
        });
    }

    //to get loggedin user's bottles he is selling
    axios
      .get(`${API_URL}/userBottles`, { withCredentials: true })
      .then((wines) => {
        console.log("bottles are: ", wines.data);
        console.log("loggedInUser._id is", loggedInUser._id);

        this.setState({
          wines: wines.data,
        });
      });
  }

  editProfile = (e, profile) => {
    e.preventDefault()

    axios
      .patch(
        `${API_URL}/profile/edit`,
        {
          username: profile.username,
          bio: profile.bio,
          location: profile.location,
        },
        { withCredentials: true }
      )
      .then(() => {
        let updateProfile = this.state.profile.map((myProfile) => {
          if (myProfile._id == profile._id) {
            myProfile = profile;
          }
          return myProfile;
        });

        this.setState(
          {
            profile: updateProfile,
          },
          () => {
            this.props.history.push("/profile");
          }
        );
      });
  };

  render() {
    const { loggedInUser, username } = this.props;
    // const {username} = this.state.profile

    if (!loggedInUser) {
      return <Redirect to={"/sign-in"} />;
    }

    if (!this.state.profile) {
      return <h3>Loading...</h3>;
    }
    return (
      <body className="body">
        <section className="margin-section">
          <Card>
            <Card.Header>Welcome {this.state.profile.username}</Card.Header>
            <Card.Body>
              <Card.Title>Your biographie</Card.Title>
              <Card.Text>{this.state.profile.bio}</Card.Text>
              <Card.Title>Your current sales:</Card.Title>
              <div className="middlebox">
                {this.state.wines.map((singleBottle) => {
                  return (
                    <div>
                      <div className="subbox">
                        <div
                          className="cardo wine-card"
                          style={{ width: "18em" }}
                        >
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img
                                src={singleBottle.image}
                                style={{ width: "100%" }}
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p
                                  className="title is-4"
                                  style={{ height: "1em" }}
                                >
                                  <Link to={`/bottle/${singleBottle._id}`}>
                                    <p key={singleBottle._id}>
                                      {singleBottle.name}
                                    </p>
                                  </Link>
                                </p>
                                <p className="subtitle is-6"></p>
                              </div>
                            </div>

                            <div className="content">
                              {/* {bottle.description} */}
                              <br />
                              <p>
                                <b>Vintage:</b> {singleBottle.year}
                              </p>
                              <p>
                                <b>Price: </b>
                                <span>$</span>
                                {singleBottle.price}
                              </p>
                              <p>
                                <b>Origin: </b> {singleBottle.country}
                              </p>
                            </div>
                          </div>
                          <footer className="card-footer">
                            <>
                              <Link
                                className="card-footer-item"
                                onClick={() => {
                                  this.props.onDelete(singleBottle._id);
                                }}
                              >
                                Delete
                              </Link>
                              <Link
                                className="card-footer-item"
                                to={`/bottle/${singleBottle._id}/edit`}
                              >
                                Edit
                              </Link>
                            </>
                          </footer>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="bbuttons">
                <Link to={`/profile/edit`} /*onEdit={this.editProfile}*/>
                  <button class="btn-hover color-11 ">Edit my profile</button>
                </Link>
              </div>{" "}
            </Card.Body>
          </Card>
        </section>
      </body>
    );
  }
}
