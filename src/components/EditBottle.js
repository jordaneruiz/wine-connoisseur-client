import React, { Component } from 'react'
import axios from 'axios' 

export default class EditBottle extends Component {

    state = {
        wine: {}
    }

    componentDidMount() {
        //we want to retrieve the date of the bottle the user wants to update

        let bottleId = this.props
    }


    render() {
        return (
            <div>
                edit the bottled
            </div>
        )
    }
}
