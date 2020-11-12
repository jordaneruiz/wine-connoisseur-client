import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WineBottles(props) {
console.log(props.wines);
console.log("props.wines: ", props.wines)
// console.log("props.loggedInUser", props.loggedInUser)

  return (
    <body className="body">
      <Carousel >
        <Carousel.Item>
          <img className="d-block w-100" src="WINE3.png" alt="First slide" />
          <Carousel.Caption>
          <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input> 

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="WINE1.png" alt="Third slide" />

          <Carousel.Caption>
          <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input> 

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="WINE2.png" alt="Third slide" />

          <Carousel.Caption>
          <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input> 

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
      <h1>Wine Connoisseur</h1>
            <p>Exceptionnal Vintage Wine waiting to find a new owner.</p>
      <div className="filterbox">     
        <div><button type="submit" class="btn-hover color-11"><Link to={"/add-bottle"} style={{color: "white"}}>Sell a bottle</Link></button></div>
        <div><button onClick={() => {props.onClick(props.sortByYear)}} type="submit" class="btn-hover color-11" style={{color: "white"}}>Filter by Year</button></div>
        <div><button onClick={() => {props.onClick(props.sortByPrice)}} type="submit" class="btn-hover color-11" style={{color: "white"}}>Filter by Price</button></div>
      </div> 
        {/* <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input>  */}

      </Jumbotron>

      <div className="box">
        
        
        <div>{props.loggedInUser ? <h2> {props.loggedInUser.username}, it's time to buy some treasure</h2> : <p>Time to buy some treasure</p>}</div>
        <div className="middlebox">


        
          {props.wines.map((bottle) => {
            return (
              
              //{ bottle.userSeller !== props.loggedInUser._id ? ... : ... }
              
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
                          <p className="title is-4 text-center" style={{ height: "2em"}}>
                            <Link to={`/bottle/${bottle._id}`}>
                              <p key={bottle._id}>{bottle.name}</p>
                            </Link>
                          </p>
                          <p className="subtitle is-6"></p>
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
                        </p>
                        {/* <time datetime="2016-1-1">1 Jan 2016</time> */}
                      </div>
                    </div>
                    <footer className="card-footer">


                    { 

                      (!props.loggedInUser) ?    
                        <>
                        <a href="#" className="card-footer-item">
                        Save
                      </a>
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
                        <a href="#" className="card-footer-item">
                        Save
                      </a>
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
    </body>
  );
}

//export default withRouter(WineBottles)

// <Link to={`/bottle/${bottle._id}`}>
//                         <p key={bottle._id}>{bottle.name}</p>
//                         </Link>



{/* 
{ 

(!props.loggedInUser) ?    
  <>
  <a href="#" className="card-footer-item">
  Save
</a>
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
  <Link className="card-footer-item" onClick={() => { this.props.onDelete(props.wines._id) }}>Delete</Link>
  <Link className="card-footer-item" to={`/bottle/${bottle._id}/edit`}>Edit</Link>
</>


} */}