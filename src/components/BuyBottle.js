import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import "../App.css";
import Axios from 'axios'


export default class BuyBottle extends Component {

state = {
    wine: null, // dont put {}
}

componentDidMount() {
    // console.log(this.props)//will list history, location and match 
    // console.log(this.props.match)
    // console.log(this.props.match.params.bottleId)
    // console.log(this.state.wine)
    // console.log(this.props.loggedInUser)


    
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
      console.log("component renter", this.state.wine)
    const promise = loadStripe(
      "pk_test_51HlsvIIMHXpXkStpKVMHmIz6BKoRyJmdvZSHNBQdWlde34L5RKSpjEmgD67BQFV1ILiRNVRXEREoF1rhQ58KNbmq00XmP3FOTw"
    );


    if (!this.state.wine) return <h2>Loading...</h2>

    return (
      <div className="App">
        <Elements stripe={promise}>
          <CheckoutForm  wine={this.state.wine}/>
        </Elements>
      </div>
    );
  }
}
