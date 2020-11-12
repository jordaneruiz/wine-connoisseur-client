import Axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../config";

export default class BottleDetails extends Component {
  //the result is 1 bottle of wine. It is an object
  state = {
    wine: {},
  };

  //to load the details of the bottle of wine from the DB
  componentDidMount() {
    console.log(this.props); //will list history, location and match
    console.log(this.props.match);
    console.log(this.props.match.params.bottleId);
    console.log(this.state.wine);
    console.log(this.props.loggedInUser);

    let id = this.props.match.params.bottleId;

    Axios.get(`${API_URL}/bottle/${id}`, { withCredentials: true }).then(
      (resp) => {
        console.log("resp is : ", resp);
        this.setState({
          wine: resp.data,
        });
      }
    );
  }

  render() {
    const {
      _id,
      name,
      year,
      price,
      userSeller,
      description,
      country,
      region,
      grappeVariety,
      color,
      image,
      saleStatus,
    } = this.state.wine;
    const { loggedInUser } = this.props;

    if (!loggedInUser) {
      return <Redirect to={"/sign-in"} />;
    }

    return (
      <body className="body bodyDetails">
        <div className="box">
          <div className="middlebox">
            <div>
              <div className="subbox">
                <div className="cardo wine-card" style={{ width: "38em" }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={image} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4 text-center" style={{ height: "2em" }}>
                          <Link to={`/bottle/${_id}`}>
                            <p key={_id}>{name}</p>
                          </Link>
                        </p>
                        <p className="subtitle is-6"></p>
                      </div>
                    </div>

                    <div className="content">
                      {/* {bottle.description} */}
                      <br />
                      <p>
                        <b>Vintage: </b> {year}
                      </p>
                      <p>
                        <b>Price: </b>
                        <span>$</span>
                        {price}
                      </p>
                      <p>
                        <b>Origin: </b> {country}, {region}
                      </p>
                      <p>
                        <b>Grappe Variety: </b> {grappeVariety}
                      </p>
                      <p>
                        <b>Description: </b>
                        {description}
                      </p>
                    </div>
                  </div>
                  <footer className="card-footer">
                   

                    {
                      saleStatus === true ? (
                        <>
                        <Link
                            to={`/profile/${userSeller}`}
                            className="card-footer-item"
                          >
                            Seller
                          </Link>
                          
                        </>
                      ) : loggedInUser._id !== userSeller ? (
                        <>
                        <a href="#" className="card-footer-item">
                            Save
                          </a>
                          <Link
                            to={`/profile/${userSeller}`}
                            className="card-footer-item"
                          >
                            Seller
                          </Link>
                          <Link to={`/buy/${_id}`} className="card-footer-item">
                            Buy
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            className="card-footer-item"
                            onClick={() => {
                              this.props.onDelete(_id);
                            }}
                          >
                            Delete
                          </Link>
                          <Link
                            className="card-footer-item"
                            to={`/bottle/${_id}/edit`}
                          >
                            Edit
                          </Link>
                        </>
                      )
                    }
                  </footer>
                </div>
              </div>
            </div>

          </div>
        </div>
      </body>
    );
  }
}
