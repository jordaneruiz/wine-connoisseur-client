import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../StyleSheet/App.css"; // Import Navbar styles
import Filters from './Filters';

const WineBottles = (props) => {
  const { wines, onClick } = props; // Retrieve the wines prop
  console.log("00 wines: ", wines);





  return (
    <div className="body">
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="WINE3.png" alt="First slide" />
          <Carousel.Caption>
            {/* <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input>  */}
            <div className="welcome">
              <h3 className="sub-title">Welcome Wine Enthousiasts!</h3>
              <h1 className="main-title">
                It’s always wine o'clock somewhere!
              </h1>
              <h5 className="welcome-text">
                Discover Exceptionnal Vintage Wines waiting to find a new owner
              </h5>

              {/* <div class="search-box">
                  <input class="search-input" type="text" placeholder="Search something..">
                  </input>
                  <button class="search-btn"></button>
                </div> */}




            </div>
            <div>
              {/* <p>Quick Search</p> */}
              {/* </div>
            <div className="quickSearchFilters">
              <div className="input-group">
                <input className="filter form-control" type="text" placeholder="Wine name"></input>
              </div>
              <div className="input-group">
                <input className="filter form-control" type="text" placeholder="Year"></input>
              </div>
              <div className="input-group">
                <Dropdown className="filter dropDown-title">
                  <Dropdown.Toggle variant="light" id="dropdown-basic" >
                    <span>Color</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">White</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rosé</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>




      <div className="box">
      <div>
     
      <Filters onClick={onClick}></Filters>
      </div>
        <div>
          {props.loggedInUser ? (
            <h2>
              {" "}
              {props.loggedInUser.username}, it's time to buy some treasure
            </h2>
          ) : (
            <p>Time to buy some treasure</p>
          )}
        </div>

        <div className="middlebox cards">
          <Card>
            <ul className="cards">
              {props.wines.map((bottle) => {
                return (
                  <li key={bottle._id} className="cards__item">
                    <div className="card">
                      <div className="card__image card__image--flowers"></div>
                      <div className="card__content">
                        <Link to={`/bottle/${bottle._id}`}>
                          <div className="card__title">{bottle.name}</div>
                        </Link>
                        <p className="card__subTitle">
                          <span>$</span>
                          {bottle.price}
                          {/* <hr></hr> */}
                        </p>
                        <p className="card__text">
                          This is the shorthand for flex-grow, flex-shrink and
                          flex-basis combined. The second and third parameters
                          (flex-shrink and flex-basis) are optional. Default is
                          0 1 auto.
                          {/* <hr></hr> */}
                        </p>
                        <p className="card__text">
                          <b>Vintage: </b> {bottle.year}
                          <br></br>
                          <b>Origin: </b>
                          {bottle.country}
                        </p>
                        {/* <Button className="btn btn--block card__btn" variant="primary">Buy</Button> */}
                      </div>
                      <div className="box-footer">
                        <div className="box-cat">
                          {/* <FontAwesomeIcon
                            className="box-cat"
                            icon="fa-thin fa-heart"
                          /> */}
                          Like
                        </div>
                        <div className="box-cat card__text">Buy</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>

      {/* <div style={{border: "pink 2px solid", height: "400px"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div> */}
    </div>
  );
};

export default WineBottles;

// <div key={bottle._id}>
//                 <div className="subbox">
//                   <div className="cardo wine-card" style={{ width: "18em"}}>
//                     <div className="card-image">
//                       <figure className="image is-4by3">
//                         {/* <img src={bottle.image} alt="Placeholder image" /> */}
//                       </figure>
//                     </div>
//                     <div className="card-content">
//                       <div className="media">
//                         <div className="media-content">
//                           <div className="title is-4 text-center" style={{ height: "2em"}}>
//                             <Link to={`/bottle/${bottle._id}`}>
//                               <p>{bottle.name}</p>
//                             </Link>
//                           </div>
//                           <p className="subtitle is-6"></p>
//                         </div>
//                       </div>

//                       <div className="content">
//                         <br />
//                         <p>
//                           <b>Vintage: </b> {bottle.year}
//                         </p>
//                         <p>
//                           <b>Price: </b>
//                           <span>$</span>
//                           {bottle.price}
//                         </p>
//                         <p>
//                           <b>Origin: </b>
//                           {bottle.country}
//                         </p>
//                       </div>
//                     </div>
//                     <footer className="card-footer">

//                     {

//                       (!props.loggedInUser) ?
//                         <>
//                       <Link
//                         to={`/bottle/${bottle._id}`}
//                         className="card-footer-item"
//                       >
//                         Info
//                       </Link>
//                       <Link
//                         to={`/buy/${bottle._id}`}
//                         className="card-footer-item"
//                       >
//                         Buy
//                         </Link>
//                       </>

//                       : props.loggedInUser._id !== bottle.userSeller ?

//                       <>
//                       <Link
//                         to={`/bottle/${bottle._id}`}
//                         className="card-footer-item"
//                       >
//                         Info
//                       </Link>
//                       <Link
//                         to={`/buy/${bottle._id}`}
//                         className="card-footer-item"
//                       >
//                         Buy
//                         </Link>
//                       </>
//                       :
//                       <>
//                         <div className="card-footer-item" onClick={() => {props.onDelete(bottle._id) }}>Delete</div>
//                         <Link className="card-footer-item" to={`/bottle/${bottle._id}/edit`}>Edit</Link>
//                       </>

//                     }

//                     </footer>
//                   </div>
//                 </div>
//               </div>
