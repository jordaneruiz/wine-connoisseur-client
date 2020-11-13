import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../config";
import { Card, Button } from "react-bootstrap";

export default class Profile extends Component {
  state = {
    profile: {},
    wines: [],
    purchasedWines: [],
    soldBottles: [],
  };

  componentDidMount() {
    let id = this.props.match.params.userId;

    //fetch seller user information
    axios
      .get(`${API_URL}/profile/${id}`, { withCredentials: true })
      .then((resp) => {
        // console.log("this.props.match.params is ", this.props.match.params)
        // console.log("resp.data is ", resp.data)
        this.setState({
          profile: resp.data,
        });
      });

    //get all the actual bottles the user is selling
    let userId = this.props.match.params.userId;
    console.log("!!!! userId is ", userId);
    axios
      .get(`${API_URL}/userBottles/${userId}`, { withCredentials: true })
      .then((wines) => {
        console.log("!!!!! bottles are: ", wines.data);

        this.setState({
          wines: wines.data,
        });
      });

    //to get the user's purchased bottles
    axios
      .get(`${API_URL}/userBottlesPurchased`, { withCredentials: true })
      .then((purchased) => {
        console.log("purchased bottles are: ", purchased.data);

        this.setState({
          purchasedWines: purchased.data,
        });
      });

    //to get the user's sold bottles
    axios
      .get(`${API_URL}/userBottlesSold`, { withCredentials: true })
      .then((sales) => {
        console.log("sold bottles are: ", sales.data);

        this.setState({
          soldBottles: sales.data,
        });
      });
  }

  render() {
    const { loggedInUser } = this.props;
    const { username, bio, location } = this.state.profile;

    if (!loggedInUser) {
      return <Redirect to={"/sign-in"} />;
    }

    if (loggedInUser._id === this.state.profile._id){
      return <Redirect to={"/profile"} />;
    }

    return (
      <body className="body">
        <section className="margin-section">
          <Card>
            <Card.Header className="welcome-title"><h2>Welcome, this is {username}'s profile</h2></Card.Header>
            <Card.Body>
              <Card.Title>{username}'s Biographie</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Card.Title></Card.Title>





              <div class="tabset">
                  <input
                    type="radio"
                    name="tabset"
                    id="tab1"
                    aria-controls="marzen"
                    checked
                  />
                  <label for="tab1">CURRENT SALES</label>

                  <input
                    type="radio"
                    name="tabset"
                    id="tab2"
                    aria-controls="rauchbier"
                  />
                  <label for="tab2">PAST SALES</label>


                  <div class="tab-panels">
                    <section id="marzen" class="tab-panel">
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
                                          className="title is-4 text-center text-center"
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
                    </section>
                    
                    
                    <section id="dunkles" class="tab-panel">
                      <div className="middlebox">
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
                  );
                })}
                      </div>
                    </section>
                  </div>
                </div>

            
            </Card.Body>
          </Card>
        </section>
      </body>
    );
  }
}








// <div className="middlebox">
//                 {this.state.wines.map((singleBottle) => {
//                   return (
//                     <div>
//                       <div className="subbox">
//                         <div
//                           className="cardo wine-card"
//                           style={{ width: "18em" }}
//                         >
//                           <div className="card-image">
//                             <figure className="image is-4by3">
//                               <img
//                                 src={singleBottle.image}
//                                 alt="Placeholder image"
//                               />
//                             </figure>
//                           </div>
//                           <div className="card-content">
//                             <div className="media">
//                               <div className="media-content">
//                                 <p
//                                   className="title is-4 text-center"
//                                   style={{ height: "1em" }}
//                                 >
//                                   <Link to={`/bottle/${singleBottle._id}`}>
//                                     <p key={singleBottle._id}>
//                                       {singleBottle.name}
//                                     </p>
//                                   </Link>
//                                 </p>
//                                 <p className="subtitle is-6"></p>
//                               </div>
//                             </div>

//                             <div className="content">
//                               {/* {bottle.description} */}
//                               <br />
//                               <p>
//                                 <b>Vintage:</b> {singleBottle.year}
//                               </p>
//                               <p>
//                                 <b>Price: </b>
//                                 <span>$</span>
//                                 {singleBottle.price}
//                               </p>
//                               <p>
//                                 <b>Origin: </b> {singleBottle.country}
//                               </p>
//                             </div>
//                           </div>
//                           <footer className="card-footer">
//                             <>
//                               <a href="#" className="card-footer-item">
//                                 Save
//                               </a>
//                               <Link
//                                 to={`/bottle/${singleBottle._id}`}
//                                 className="card-footer-item"
//                               >
//                                 Info
//                               </Link>
//                               <a href="#" className="card-footer-item">
//                                 Buy
//                               </a>
//                             </>
//                           </footer>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               Sold Bottles:
//               <section className="middlebox">
//                 {this.state.purchasedWines.map((purchasedBottle) => {
//                   return (
//                     <div>
//                       <div className="subbox">
//                         <div
//                           className="cardo wine-card"
//                           style={{ width: "18em" }}
//                         >
//                           <div className="card-image">
//                             <figure className="image is-4by3">
//                               <img
//                                 src={purchasedBottle.image}
//                                 style={{ width: "100%" }}
//                                 alt="Placeholder image"
//                               />
//                             </figure>
//                           </div>
//                           <div className="card-content">
//                             <div className="media">
//                               <div className="media-content">
//                                 <p
//                                   className="title is-4 text-center"
//                                   style={{ height: "1em" }}
//                                 >
//                                   <Link to={`/bottle/${purchasedBottle._id}`}>
//                                     <p key={purchasedBottle._id}>
//                                       {purchasedBottle.name}
//                                     </p>
//                                   </Link>
//                                 </p>
//                                 <p className="subtitle is-6"></p>
//                               </div>
//                             </div>

//                             <div className="content">
//                               {/* {bottle.description} */}
//                               <br />
//                               <p>
//                                 <b>Vintage:</b> {purchasedBottle.year}
//                               </p>
//                               <p>
//                                 <b>Price: </b>
//                                 <span>$</span>
//                                 {purchasedBottle.price}
//                               </p>
//                               <p>
//                                 <b>Origin: </b> {purchasedBottle.country}
//                               </p>
//                             </div>
//                           </div>
//                           <footer className="card-footer">
//                             <>
//                               <Link
//                                 to={`/bottle/${purchasedBottle._id}`}
//                                 className="card-footer-item"
//                               >
//                                 Info
//                               </Link>
//                             </>
//                           </footer>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </section>
            