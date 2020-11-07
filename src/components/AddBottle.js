import React from 'react'
import {Redirect} from 'react-router-dom'

function AddBottle(props) {

    //props.onAdd = function

        if (!props.loggedInUser){
            //render method always return something
            return <Redirect to={'/sign-in'}/>
        }

    return (
        //return can only return a JSX donc la condition above can't be in this return bloc
        <form onSubmit={props.onAdd} >
            <input name="name" type="text" placeholder="Enter name"></input>            
            <input name="year" type="NUMBER" placeholder="Enter year"></input>
            <input name="price" type="text" placeholder="Enter price"></input>
            <input name="description" type="text" placeholder="Enter description"></input>
            <input name="country" type="text" placeholder="Enter country"></input>
            <input name="region" type="text" placeholder="Enter region"></input>
            <input name="grappeVariety" type="text" placeholder="Enter grappeVariety"></input>
            <input name="color" type="text" placeholder="Enter color"></input>
            <input name="picture" type="file"></input>
            {/* <input type="file" className="form-control" name="image" id="image" /> */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddBottle