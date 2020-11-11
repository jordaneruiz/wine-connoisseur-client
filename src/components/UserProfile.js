import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import {API_URL} from '../config'
import { Card, Button } from "react-bootstrap";

export default class Profile extends Component {
    
    state = {
      profile: {},
      wines: [],
    }
    
      componentDidMount() {
        let id = this.props.match.params.userId

          //fetch seller user information 
          axios.get(`${API_URL}/profile/${id}`, {withCredentials: true})
          .then((resp) => {
            // console.log("this.props.match.params is ", this.props.match.params)
            // console.log("resp.data is ", resp.data)
            this.setState({
            profile: resp.data
            })
          })


          //get all the bottles the user is selling
          
          let userId = this.props.match.params.userId
          console.log("!!!! userId is ", userId)
          axios.get(`${API_URL}/userBottles/${userId}`, {withCredentials: true})
          .then((wines) => {
            console.log("!!!!! bottles are: ", wines.data)
            

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


      <body className="body">
        <section className="margin-section">
        <Card>
          <Card.Header>Welcome, this is {username}'s profile</Card.Header>
          <Card.Body>
            <Card.Title>{username}'s Biographie</Card.Title>
            <Card.Text>{bio}</Card.Text>
            <Card.Title>{username}'s current sales:</Card.Title>

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
                                    <a href="#" className="card-footer-item">
                                      Save
                                    </a>
                                    <Link
                                      to={`/bottle/${singleBottle._id}`}
                                      className="card-footer-item"
                                    >
                                      Info
                                    </Link>
                                    <a href="#" className="card-footer-item">
                                      Buy
                                    </a>
                                    </>
                                  </footer>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                       </div>
            </Card.Body>
          </Card>
        </section>
      </body>
    )
  }
}


          


        