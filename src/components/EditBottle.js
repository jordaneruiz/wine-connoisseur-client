import React, { Component } from 'react'
import axios from 'axios' 
import {API_URL} from '../config'

export default class EditBottle extends Component {

    state = {
        wine: {}
    }

    componentDidMount() {
        //we want to retrieve the date of the bottle the user wants to update
        let bottleId = this.props.match.params.bottleId
        axios.get(`${API_URL}/bottle/${bottleId}`, {withCredentials: true})
            .then((response) => {
                console.log("response is: ", response)
                this.setState({
                    wine: response.data
                })
            })
    }

    nameChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.name =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }
 
     yearChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.year =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     priceChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.price =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     descriptionChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.description =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     countryChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.country =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     regionChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.region =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     grappeVarietyChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.grappeVariety =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     colorChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.color =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     imageChange = (e) => {
        let cloneWine = JSON.parse(JSON.stringify(this.state.wine))
        cloneWine.image =  e.target.value
        this.setState({
            wine: cloneWine
        })
     }

     


    render() {
        const {name, year, price, description, country, region, grappeVariety, color, image} = this.state.wine

        return (
                <div>
            <div className="body" >
        {/* return can only return a JSX donc la condition above can't be in this return bloc */}
       
            <form >
            <div className="container">
            <div className="left">
                <div className="header">
                <h2 className="animation a1">Time to make some changes!</h2>
                <h4 className="animation a2">Make it desirable!</h4>
                </div>
                <div className="form add-form">

                        <input onChange={this.nameChange} className="form-field-add animation a3" value={name} name="name" type="text" placeholder="Enter name"></input>            
                        <input onChange={this.yearChange} className="form-field-add animation a4" value={year} name="year" type="number" placeholder="Enter year"></input>
                        <input onChange={this.priceChange} className="form-field-add animation a5" value={price} name="price" type="text" placeholder="Enter price"></input>
                        <input onChange={this.descriptionChange} className="form-field-add animation a6" value={description} name="description" type="text" placeholder="Enter description"></input>
                        <input onChange={this.countryChange} className="form-field-add animation a7" value={country} name="country" type="text" placeholder="Enter country"></input>
                        <input onChange={this.regionChange} className="form-field-add animation a8" value={region} name="region" type="text" placeholder="Enter region"></input>
                        <input onChange={this.grappeVarietyChange} className="form-field-add animation a9" value={grappeVariety} name="grappeVariety" type="text" placeholder="Enter grappeVariety"></input>
                        <input onChange={this.colorChange} className="form-field-add animation a10" value={color} name="color" type="text" placeholder="Enter color"></input>
                        <br/>
                        <input onChange={this.imageChange} className="animation a11" name="image" type="file"></input>
                        {/* <input type="file" classNameName="form-control" name="image" id="image" /> */}
                        <br/>
                        <div><button onClick={(e) => { this.props.onEdit(e, this.state.wine) }} className="form-field-add btn-hover color-11 animation a12" type="submit">Save</button></div>

                </div>
            </div>
            {/* <div className="right-add"></div> */}
            </div>
            </form>

            </div>

            </div>
        )
    }
}
