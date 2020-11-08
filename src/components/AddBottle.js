import React from 'react'
import {Redirect} from 'react-router-dom'

function AddBottle(props) {

    //props.onAdd = function

        if (!props.loggedInUser){
            //render method always return something
            return <Redirect to={'/sign-in'}/>
        }

    return (
        <div className="body">
        {/* return can only return a JSX donc la condition above can't be in this return bloc */}
       
            <form onSubmit={props.onAdd} >
            <div className="container">
            <div className="left">
                <div className="header">
                <h2 className="animation a1">Great Vintage only deserve the best</h2>
                <h4 className="animation a2">It's time to find a new owner to take care of this bottle!</h4>
                </div>
                <div className="form">

                        <input className="form-field animation a3" name="name" type="text" placeholder="Enter name"></input>            
                        <input className="form-field animation a4" name="year" type="NUMBER" placeholder="Enter year"></input>
                        <input className="form-field animation a5" name="price" type="text" placeholder="Enter price"></input>
                        <input className="form-field animation a6" name="description" type="text" placeholder="Enter description"></input>
                        <input className="form-field animation a7" name="country" type="text" placeholder="Enter country"></input>
                        <input className="form-field animation a8" name="region" type="text" placeholder="Enter region"></input>
                        <input className="form-field animation a9" name="grappeVariety" type="text" placeholder="Enter grappeVariety"></input>
                        <input className="form-field animation a10" name="color" type="text" placeholder="Enter color"></input>
                        <br/>
                        <input className="animation a11" name="image" type="file"></input>
                        {/* <input type="file" classNameName="form-control" name="image" id="image" /> */}
                        <br/>
                        <div class="bbuttons"><button className="form-field btn-hover color-11 animation a12" style={{color: "white"}} type="submit">Submit</button></div>
                </div>
            </div>
            {/* <div className="right-add"></div> */}
            </div>
            </form>

            </div>
    )
}

export default AddBottle


{/* <form onSubmit={props.onAdd} >
<input name="name" type="text" placeholder="Enter name"></input>            
<input name="year" type="NUMBER" placeholder="Enter year"></input>
<input name="price" type="text" placeholder="Enter price"></input>
<input name="description" type="text" placeholder="Enter description"></input>
<input name="country" type="text" placeholder="Enter country"></input>
<input name="region" type="text" placeholder="Enter region"></input>
<input name="grappeVariety" type="text" placeholder="Enter grappeVariety"></input>
<input name="color" type="text" placeholder="Enter color"></input>
<input name="image" type="file"></input>
<button type="submit">Submit</button>
</form> */}