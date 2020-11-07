import React, { Component } from 'react'
import axios from 'axios' 

export default class EditBottle extends Component {

    state = {
        wine: {}
    }

    componentDidMount() {
        //we want to retrieve the date of the bottle the user wants to update
        let bottleId = this.props.match.params.bottleId
        axios.get(`http://localhost:3040/api/bottle/${bottleId}`)
            .then((response) => {
                this.setState({
                    wine: response.data
                })
            })
    }


    render() {
        const {name, year, price, description, country, region, grappeVariety, color, picture} = this.state.wine

        return (
            <div>
                edit the bottled
                <form >
            <input value={name} name="name" type="text" placeholder="Enter name"></input>            
            <input value={year} name="year" type="NUMBER" placeholder="Enter year"></input>
            <input value={price} name="price" type="text" placeholder="Enter price"></input>
            <input value={description} name="description" type="text" placeholder="Enter description"></input>
            <input value={country} name="country" type="text" placeholder="Enter country"></input>
            <input value={region} name="region" type="text" placeholder="Enter region"></input>
            <input value={grappeVariety} name="grappeVariety" type="text" placeholder="Enter grappeVariety"></input>
            <input value={color} name="color" type="text" placeholder="Enter color"></input>
            <input value={picture} name="picture" type="file"></input>
            {/* <input type="file" className="form-control" name="image" id="image" /> */}
            <button type="submit">Submit</button>
        </form>
            </div>
        )
    }
}
