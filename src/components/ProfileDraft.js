import React, { Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { Card, Button } from "react-bootstrap";

export default class Profile extends Component {
  state = {
    profile: null,
    wines: [],
    purchasedWines: [],
    soldBottles: [],
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

      //to get loggedin user's purchased bottles 
      axios
      .get(`${API_URL}/userBottlesPurchased`, { withCredentials: true })
      .then((purchased) => {
        console.log("purchased bottles are: ", purchased.data);
        console.log("loggedInUser._id is", loggedInUser._id);

        this.setState({
          purchasedWines: purchased.data,
        });
      });


      //to get loggedin user's sold bottles 
      axios
      .get(`${API_URL}/userBottlesSold`, { withCredentials: true })
      .then((sales) => {
        console.log("sold bottles are: ", sales.data);

        this.setState({
          soldBottles: sales.data,
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
      return useNavigate("/sign-in");
    }

    if (!this.state.profile) {
      return <h3>Loading...</h3>;
    }
    return (
      <body className="body">
        <section className="margin-section">
          <Card>
            <Card.Header className="welcome-title"><h2>Welcome {this.state.profile.username}</h2></Card.Header>
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
                                  className="title is-4 text-center"
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

              PURCHASED BOTTLES:
              <section className="middlebox">
                {this.state.purchasedWines.map((purchasedBottle) => {
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
                                src={purchasedBottle.image}
                                style={{ width: "100%" }}
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p
                                  className="title is-4 text-center"
                                  style={{ height: "1em" }}
                                >
                                  <Link to={`/bottle/${purchasedBottle._id}`}>
                                    <p key={purchasedBottle._id}>
                                      {purchasedBottle.name}
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
                                <b>Vintage:</b> {purchasedBottle.year}
                              </p>
                              <p>
                                <b>Price: </b>
                                <span>$</span>
                                {purchasedBottle.price}
                              </p>
                              <p>
                                <b>Origin: </b> {purchasedBottle.country}
                              </p>
                            </div>
                          </div>
                          <footer className="card-footer">
                            <>
                            <Link
                        to={`/bottle/${purchasedBottle._id}`}
                        className="card-footer-item"
                      >
                        Info
                      </Link>
                            </>
                          </footer>
                        </div>
                      </div>
                    </div>
                  ) } ) }
              </section>


              SOLD BOTTLES:
              <section className="middlebox">
                {this.state.soldBottles.map((soldBottles) => {
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
                                src={soldBottles.image}
                                style={{ width: "100%" }}
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p
                                  className="title is-4 text-center"
                                  style={{ height: "1em" }}
                                >
                                  <Link to={`/bottle/${soldBottles._id}`}>
                                    <p key={soldBottles._id}>
                                      {soldBottles.name}
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
                                <b>Vintage:</b> {soldBottles.year}
                              </p>
                              <p>
                                <b>Price: </b>
                                <span>$</span>
                                {soldBottles.price}
                              </p>
                              <p>
                                <b>Origin: </b> {soldBottles.country}
                              </p>
                            </div>
                          </div>
                          <footer className="card-footer">
                            <>
                            <Link
                        to={`/bottle/${soldBottles._id}`}
                        className="card-footer-item"
                      >
                        Info
                      </Link>
                            </>
                          </footer>
                        </div>
                      </div>
                    </div>
                  ) } ) }
              </section>



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
