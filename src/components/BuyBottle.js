import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import "../StyleSheet/App.css";
import Axios from 'axios'
import {API_URL} from '../config'


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

    Axios.get(`${API_URL}/bottle/${id}`, {withCredentials: true})
        .then((resp) => {
            console.log("resp is : ", resp)
            this.setState({
                wine: resp.data
            })
        })
}

//once teh state is updates with the bottle that has been bought you have to:
//- remove it from the seller's profile
//- display it on the buyer'sprofile
//put the money on the seler account
//have to remove the "seller id" from the wiine bottle model?
//and add a "buyer id??"



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
