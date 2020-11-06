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

        let id = this.props.match.params.bottleId

        Axios.get(`http://localhost:3040/api/bottle/${id}`)
            .then((resp) => {
                console.log("resp is : ", resp)
                this.setState({
                    wine: resp.data
                })
            })
    }


    render() {
        const {_id, name, year, price, description, country, region, grappeVariety, color, picture} = this.state.wine
        const {loggedInUser} = this.props


        if (!loggedInUser){
            return <Redirect to={'/sign-in'}/>
        }


        return (
            <div>
                <p>Name: {name}</p>
                <p>Year: {year}</p>
                <p>Price: {price}</p>

                <Link to={`/bottle/${_id}/edit`}><button>Edit</button></Link>
                <button onClick={() => { this.props.onDelete(_id) }}>Delete</button>
                <button>Buy</button>
                <button>Message Seller</button>
            </div>
        )
    }
}
