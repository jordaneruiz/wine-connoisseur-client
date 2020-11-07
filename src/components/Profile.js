import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    
    //the result is 1 bottle of wine. It is an object
    state = {
        profile: {},
    }


    //to load the detail information of the user 
    componentDidMount() {
        console.log(this.props)//will list history, location and match 
        console.log(this.props.match)
        console.log(this.props.match.params)

        let id = this.props.match.params

        axios.get(`http://localhost:3040/api/profile`)
            .then((resp) => {
                console.log("resp is : ", resp)
                this.setState({
                    wine: resp.data
                })
            })
    }
    



     
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
