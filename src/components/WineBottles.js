import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Dropdown, Container, Row, Col, Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../StyleSheet/App.css'; // Import Navbar styles

const WineBottles = (props) => {
  const { wines } = props; // Retrieve the wines prop
  console.log("00 wines: ", wines)


  return (
    <div className="body">

      <Carousel fade>

        <Carousel.Item>
          <img className="d-block w-100" src="WINE3.png" alt="First slide" />
          <Carousel.Caption>
            {/* <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input>  */}
            <div>
              <h1>Exceptionnal Vintage Wines</h1>
              <h3>waiting to find a new owner</h3>
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

        {/* <Carousel.Item>
          <img className="d-block w-100" src="WINE2.png" alt="Third slide" />

          <Carousel.Caption>
          <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input> 
          <h3>Exceptionnal Vintage Wines...</h3>
          <p>...waiting to find a new owner</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      {/* <Container fluid="md" style="position: relative">
      <Row>
        <Col><img className="d-block w-100" src="WINE3.png" alt="First slide" /></Col>
                  

      </Row>
    </Container> */}
      {/* <Jumbotron>
      <h1>Wine Connoisseur</h1>
            <p>Exceptionnal Vintage Wines waiting to find a new owner.</p>
      <div className="filterbox">     
        <div><button type="submit" class="btn-hover color-11"><Link to={"/add-bottle"} style={{color: "white"}}>Sell a bottle</Link></button></div>
        <div><button onClick={() => {props.onClick(props.sortByYear)}} type="submit" class="btn-hover color-11" style={{color: "white"}}>Filter by Year</button></div>
        <div><button onClick={() => {props.onClick(props.sortByPrice)}} type="submit" class="btn-hover color-11" style={{color: "white"}}>Filter by Price</button></div>
      </div> 
      </Jumbotron>
 */}

      <div className="box">
        
        
        <div>{props.loggedInUser ? <h2> {props.loggedInUser.username}, it's time to buy some treasure</h2> : <p>Time to buy some treasure</p>}</div>
        <div className="middlebox">


        
          {props.wines.map((bottle) => {
            return (
              
              
              <div key={bottle._id}>
                <div className="subbox">
                  <div className="cardo wine-card" style={{ width: "18em"}}>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        {/* <img src={bottle.image} alt="Placeholder image" /> */}
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <div className="title is-4 text-center" style={{ height: "2em"}}>
                            <Link to={`/bottle/${bottle._id}`}>
                              <p>{bottle.name}</p>
                            </Link>
                          </div>
                          <p className="subtitle is-6"></p>
                        </div>
                      </div>

                      <div className="content">
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
                        </p>
                      </div>
                    </div>
                    <footer className="card-footer">


                    { 

                      (!props.loggedInUser) ?    
                        <>
                      <Link
                        to={`/bottle/${bottle._id}`}
                        className="card-footer-item"
                      >
                        Info
                      </Link>
                      <Link
                        to={`/buy/${bottle._id}`}
                        className="card-footer-item"
                      >
                        Buy
                        </Link>
                      </>

                      : props.loggedInUser._id !== bottle.userSeller ?

                      <>
                      <Link
                        to={`/bottle/${bottle._id}`}
                        className="card-footer-item"
                      >
                        Info
                      </Link>
                      <Link
                        to={`/buy/${bottle._id}`}
                        className="card-footer-item"
                      >
                        Buy
                        </Link>
                      </>
                      :
                      <>
                        <div className="card-footer-item" onClick={() => {props.onDelete(bottle._id) }}>Delete</div>
                        <Link className="card-footer-item" to={`/bottle/${bottle._id}/edit`}>Edit</Link>
                      </>


                    }
                      
                    </footer>
                  </div>
                </div>
              </div>



            );
          })}
        </div>
      </div>

      <div style={{border: "pink 2px solid", height: "400px"}}>
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
      </div>
    </div>
  );
}

export default WineBottles;

