import Axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class BottleDetails extends Component {

    //the result is 1 bottle of wine. It is an object
    state = {
        wine: {},
    }

    //to load the details of the bottle of wine from the DB
    componentDidMount() {
        console.log(this.props)//will list history, location and match 
        console.log(this.props.match)
        console.log(this.props.match.params.bottleId)
        console.log(this.state.wine)
        console.log(this.props.loggedInUser)


        
        let id = this.props.match.params.bottleId

        Axios.get(`http://localhost:3040/api/bottle/${id}`, {withCredentials: true})
            .then((resp) => {
                console.log("resp is : ", resp)
                this.setState({
                    wine: resp.data
                })
            })
    }


    render() {
        const {_id, name, year, price, userSeller, description, country, region, grappeVariety, color, image} = this.state.wine
        const {loggedInUser} = this.props


        if (!loggedInUser){
            return <Redirect to={'/sign-in'}/>
        }


        return (
            <body className="body">
                <div className="box">
                    <div className="middlebox">

                    <div>
                <div className="subbox">
                  <div className="cardo wine-card" style={{ width: "38em"}}>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={image} alt="Placeholder image"/>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4" style={{ height: "2em"}}>
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
                    {/* <a href="#" Name="card-footer-item">
                        Save
                      </a>
                      <a href="#" className="card-footer-item">
                        Seller
                    </a>
                      <a href="#" className="card-footer-item">
                        Buy
                      </a>    */}

                     
                      {
                        loggedInUser._id !== userSeller ? 
                        <>
                        <a href="#" className="card-footer-item">
                          Save
                        </a>
                        <Link to={`/profile/${userSeller}`} className="card-footer-item">
                          Seller
                      </Link>
                      <Link
                        to={`/buy/${_id}`}
                        className="card-footer-item"
                      >
                        Buy
                        </Link>
                        </>                   
                        : 

                        <>
                        <Link className="card-footer-item" onClick={() => { this.props.onDelete(_id) }}>Delete</Link>
                        <Link className="card-footer-item" to={`/bottle/${_id}/edit`}>Edit</Link>
                        </>
                      }
                
                    </footer>
                  </div>
                </div>
              </div>
            
            {/* <div>
                <p>Name: {name}</p>
                <p>Year: {year}</p>
                <p>Price: {price}</p>
                <p>Seller: {userSeller}</p>


                <Link to={`/bottle/${_id}/edit`}><button>Edit</button></Link>
                <button onClick={() => { this.props.onDelete(_id) }}>Delete</button>
                <button>Buy</button>
                <button>Message Seller</button>
            </div> */}
                </div>
           </div> 
        </body>
        )
    }
}







// {
//   this.props.loggedInUser._id !== userSeller ? 
//   <>
//   <a href="#" className="card-footer-item">
//     Save
//   </a>
//   <a href="#" className="card-footer-item">
//     Seller
// </a>
//   <a href="#" className="card-footer-item">
//     Buy
//   </a>   
//   </>                   
//   : 

//   <>
//   <button onClick={() => { this.props.onDelete(_id) }}>Delete</button>
//   <Link to={`/bottle/${_id}/edit`}><button>Edit</button></Link>
//   </>
// }