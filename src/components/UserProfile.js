import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Profile extends Component {
    
    state = {
      profile: {},
      wines: [],
    }
    
      componentDidMount() {
        let id = this.props.match.params.userId

          //fetch seller user information 
          axios.get(`http://localhost:3040/api/profile/${id}`, {withCredentials: true})
          .then((resp) => {
            // console.log("this.props.match.params is ", this.props.match.params)
            // console.log("resp is ", resp)
            // console.log("resp.data is ", resp.data)

            this.setState({
            profile: resp.data
            })
          })


          //get all the bottles the user is selling
          axios.get(`http://localhost:3040/api/userBottles`, {withCredentials: true})
          .then((wines) => {
            console.log("bottles are: ", wines.data)

            this.setState({
            wines: wines.data,
            })
          })
        }



  render() {
    const {loggedInUser} = this.props
    const {username, bio, location} = this.state.profile

    if (!loggedInUser){
        return <Redirect to={'/sign-in'}/>
    }

    return (

        <div className="profile">
                <p>Welcome, this is {username}'s profile</p>
                <p>{username}'s description {bio}</p>


                <p>{username}'s sellings</p>

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
                                          <Link
                                            to={`/bottle/${singleBottle._id}`}
                                          >
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
                                        <b>Vintage: {singleBottle.vintage}</b>
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

        </div>

    )
  }
}
