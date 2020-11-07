import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WineBottles(props) {
  //console.log(props.wines);


  return (
    <body className="body">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="WINE3.png" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="WINE1.png" alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="WINE2.png" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
      <h1>Wine Connoisseur</h1>
            <p>Exceptionnal Vintage Wine waiting to find a new owner.</p>
        <p>
          <Link variant="primary" to={"/add-bottle"}>Sell a bottle</Link>
        </p>
      </Jumbotron>

      <div className="box">
        <h1>WINE BOTTLES PAGE</h1>
        
        <p>{props.loggedInUser ? <p>User is: {props.loggedInUser.username} </p>: <p>null</p>}</p>
        <div className="middlebox">
          {props.wines.map((bottle) => {
            return (
              <div>
                <div className="subbox">
                  <div className="cardo wine-card" style={{ width: "18em"}}>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={bottle.image} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4" style={{ height: "2em"}}>
                            <Link to={`/bottle/${bottle._id}`}>
                              <p key={bottle._id}>{bottle.name}</p>
                            </Link>
                          </p>
                          <p className="subtitle is-6">{bottle.userSeller}</p>
                        </div>
                      </div>

                      <div className="content">
                        {/* {bottle.description} */}
                        <br />
                        <p>
                          <b>Vintage: </b> {bottle.year}
                        </p>
                        <p>
                          <b>Price: </b>
                          <span>$</span>
                          {bottle.price}
                        </p>
                        <p>
                          <b>Origin: </b>
                          {bottle.country}
                          {bottle.userSeller}
                        </p>
                        <time datetime="2016-1-1">1 Jan 2016</time>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a href="#" className="card-footer-item">
                        Save
                      </a>
                      <Link
                        to={`/bottle/${bottle._id}`}
                        className="card-footer-item"
                      >
                        Info
                      </Link>
                      <a href="#" className="card-footer-item">
                        Buy
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}

//export default withRouter(WineBottles)

// <Link to={`/bottle/${bottle._id}`}>
//                         <p key={bottle._id}>{bottle.name}</p>
//                         </Link>
