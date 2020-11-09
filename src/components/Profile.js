import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Profile extends Component {
    state = {
        profile: null,
        wines: [],
     }


     componentDidMount(){
        //somecode
        const {loggedInUser} = this.props

        if(!this.state.profile) {
            axios.get(`http://localhost:3040/api/profile`, {withCredentials: true})
            .then((resp) => {
                console.log("resp is : ", resp)
                console.log("loggedInUser is: ", loggedInUser)
                this.setState({
                    profile: resp.data
                })
            })
        }

        // console.log(this.props)//will list history, location and match 
        // console.log(this.props.match)
        // console.log(this.props.match.params)
        // let bottleId = this.props.match.params.bottleId
        // axios.get(`http://localhost:3040/api/bottle/${bottleId}`, {withCredentials: true})
        //   .then((wines) => {
        //       console.log("seller's bottles are: ", wines)
        //     this.setState({
        //     wines: wines.data,
        //     })
        //   })
     }


     editProfile = (profile) => {
        axios.patch(`http://localhost:3040/api/profile/edit`, {
            username: profile.username,
            bio: profile.bio, 
            location: profile.location, 
        }, {withCredentials: true})
        .then(() => {
          //console.log("resp edit is: ", resp)
            let updateProfile = this.state.profile.map((myProfile) => {
              if (myProfile._id == profile._id) {
                myProfile = profile
              }
              return myProfile
            })
    
            this.setState({
              profile: updateProfile
            }, () => {
              this.props.history.push('/profile')
            })
        })
      }

      

      

    // componentDidMount() {
    //     let id = this.props.match.params.id
    //       axios.get(`http://localhost:3040/api/profile/:userId`, {withCredentials: true})
    //       .then((wines) => {
    //         this.setState({
    //         wines: wines.data,
    //         })
    //       })
    //     }



  render() {
    const {loggedInUser, username} = this.props
    // const {username} = this.state.profile

    if (!loggedInUser){
        return <Redirect to={'/sign-in'}/>
    }

    if (!this.state.profile) {return <h3>Loading...</h3>}
    return (

        <body className="body">
                <div className="box">
                    <div className="middlebox">

                    <div>
                <div className="subbox">
                  <div className="cardo wine-card" style={{ width: "38em"}}>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4" style={{ height: "2em"}}>
                            
                          </p>
                          <p className="subtitle is-6"> </p>
                        </div>
                      </div>

                      <div className="content">
                        {/* {bottle.description} */}
                        <br />
                      
                        <p>Name: {this.state.profile.username}</p>
                        <p>Bio: {this.state.profile.bio}</p>

                        <p>My current sales: {}</p>
                
                
                        
                      </div>
                    </div>
                    <footer className="card-footer">

                        <div class="bbuttons"><button /* onClick={() => { this.props.onEdit(this.state.profile) }} */ type="submit" class="btn-hover color-11 ">Edit my profile</button></div>                
                    </footer>
                  </div>
                </div>
              </div>
                </div>
           </div> 
        </body>

    )
  }
}
