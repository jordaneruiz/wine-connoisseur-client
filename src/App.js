import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NaviBar from './components/NaviBar'
import Home from './components/Home'
import WineBottles from './components/WineBottles'
import BottleDetails from './components/BottleDetails'
import EditBottle from './components/EditBottle';
import Profile from './components/Profile';
import AddBottle from './components/AddBottle';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import BuyBottle from './components/BuyBottle';
import {API_URL} from './config'

import { Spinner } from "react-bootstrap"; //this is a name export not a default export so you have to use the curly braces


// import BuyBottleForm from "./components/BuyBottleForm";



//import {API_URL} from './config'



class App extends Component {

  state = {
    wines: [], 
    filteredWine: [],
    loggedInUser: null, 
    errorMessage: null, 
    showPage: false,
    profile: null,
  }



  componentDidMount() {
    //check if the user is loggedin or not 
    if (!this.state.loggedInUser) {
      axios.get(`${API_URL}/user`, {withCredentials: true})
        .then((response) => {
          this.setState({
            loggedInUser: response.data
          })
        })
        this.getBottles()
    } else {
      this.getBottles()
    }

         //fetch loggedin user information displayed on profile
    if (!this.state.profile) {
      axios
        .get(`${API_URL}/profile`, { withCredentials: true })
        .then((resp) => {
          console.log("resp is : ", resp);
          this.setState({
            profile: resp.data,
          });
        });
    }
}

getBottles = () => {
  axios.get(`${API_URL}/bottles`)
  
  .then((response) => {
    // response.data
    this.setState({
      wines: response.data, 
      filteredWine: response.data,
      showPage: true,
    })
  })
}


editProfile = (e, profile) => {
  e.preventDefault();

  axios
    .patch(
      `${API_URL}/profile/edit`,
      {
        username: profile.username,
        bio: profile.bio,
        location: profile.location,
      },
      { withCredentials: true }
    )
    .then((updateProfile) => {
      // let updateProfile = this.state.profile.map((myProfile) => {
      //   if (myProfile._id == profile._id) {
      //     myProfile = profile;
      //   }
      //   return myProfile;
      // });

      this.setState(
        {
          profile: updateProfile,
        },
        () => {
          this.props.history.push("/profile");
        }
      );
    });
};

  //search for a specific bottle
  searchBottle = (event) => {
    console.log(event.target.value)
    let searchText = event.target.value

    const {wines} = this.state
    let filteredWine = wines.filter((bottle) => {
      return bottle.name.toLowerCase().includes(searchText.toLowerCase())
    })

    this.setState({
      filteredWine: filteredWine
    })
}

  //filter by color
  whiteColorFilter = () => {
    let filterByWhiteColor = [...this.state.wines];
    filterByWhiteColor.filter((wine) => wine.color = "White");

    this.setState({
      filteredWine: filterByWhiteColor,
    });
  };

  //Sort wines by year
  sortByYear = () => {
    let sortWinesByYear = [...this.state.wines];
    sortWinesByYear.sort((a, b) => b.year - a.year);

    this.setState({
      filteredWine: sortWinesByYear,
    });
  };


  sortByPrice = () => {
    let sortWinesByPrice = [...this.state.wines];
    sortWinesByPrice.sort((a, b) => a.price - b.price);

    this.setState({
      filteredWine: sortWinesByPrice,
    });
  };


  //add a new bottle for sell
  addBottle = (e) => {
    e.preventDefault()
    const {name, year, price, description, country, region, grappeVariety, color, image, saleStatus} = e.target
    // const {loggedInUser} = this.state
      console.log(image.files)
    // //this is an array so you have to do it like this: 

    let imageFile = image.files[0];

    // //create a form data first (its a class in JS to create a form and create a post request)
    let uploadForm = new FormData() //its a class in JS to create a form instead of post request
    uploadForm.append('imageUrl', imageFile)//we have to send that

    // //now we create the axios post request
    axios.post(`${API_URL}/upload`, uploadForm)
    .then((response) => {
      //so first we uploaded with axios.post request
      console.log(response.data)
      //whatever image we get here, we have to create here: 
      let newBottle = {
        name: name.value,
        year: year.value,
        price: price.value,
        description: description.value,
        country: country.value,
        region: region.value,
        grappeVariety: grappeVariety.value,
        color: color.value,
        image: response.data.image,
        // userSeller: userSeller.loggedInUser.username,
      }

      axios.post(`${API_URL}/add-bottle`, newBottle, {withCredentials: true})
      .then((response) =>{
          this.setState({
            wines: [ response.data, ...this.state.wines],
            filteredWine: [response.data, ...this.state.filteredWine],
          }, () => {
            this.props.history.push('/')
          })      
      })  
    })
  }


  editBottle = (e, bottle) => {
    e.preventDefault()

    axios.patch(`${API_URL}/bottle/edit/${bottle._id}`, {
      name: bottle.name,
        year: bottle.year,
        price: bottle.price,
        description: bottle.description,
        country: bottle.country,
        region: bottle.region,
        grappeVariety: bottle.grappeVariety,
        color: bottle.color,
        image: bottle.image,
    }, {withCredentials: true})
    .then(() => {
      //console.log("resp edit is: ", resp)
        // let updatedWines = this.state.wines.map((myWine) => {
        //   if (myWine._id == bottle._id) {
        //     myWine = bottle
        //   }
        //   return myWine
        // })

        // this.setState({
        //   wines: updatedWines
        // }, () => {
        //   this.props.history.push('/')
        // })
        this.props.history.push("/")
    })
  }



  


  handleSignUp = (e) => {
    e.preventDefault()

    const {username, email, password} = e.target

    axios.post(`${API_URL}/signup`, {
    //send the data of the form 
    //sendthe input as a second parameter
    username: username.value, 
    email: email.value, 
    password: password.value
    }, {withCredentials: true})  //when the request is being made, its creatin a cookie and saving it// soeverytime the loggendin user comes back, the browser knows he is connected
    .then((response) => {
      console.log("response is :", response)
      console.log("response.data is: ", response.data)

      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch((err) => {
      console.log(err.response.data)// you have to update the state to show the error message with this catch block 
      this.setState({
        errorMessage: err.response.data.error
      })
    })
}


handleSignIn = (e) => {
  e.preventDefault()

  const {email, password} = e.target

  axios.post(`${API_URL}/signin`, {
  //send the data of the form 
  //sendthe input as a second parameter
  email: email.value, 
  password: password.value
  }, {withCredentials: true})  
  .then((response) => {
    console.log("response is:", response)
    console.log("response.data is:", response.data)

    this.setState({
      loggedInUser: response.data
    
    }, () => {
      this.props.history.push('/')
    })
  })
  .catch((err) => {
    console.log(err.response.data)// you have to update the state to show the error message with this catch block 
    this.setState({
      errorMessage: err.response.data.error
    })
  })
}



handleLogOut = (e) => {
  axios.post(`${API_URL}/logout`, {}, {withCredentials: true})  
    .then(() => {
      this.setState({
        loggedInUser: null
      })
    })
}



deleteBottle = (bottleId) => {
  axios.delete(`${API_URL}/bottle/${bottleId}`, {withCredentials: true})
    .then((resp) => {
      console.log("resp is: ", resp)
      //here, we will filter and keep the bottles that does not match the bottleId. So the bottle that matches the bottleId will be deleted
      let bottleFilter = this.state.wines.filter((wine /*resp.data*/) => {
        console.log("wine is: ", wine)
        return wine._id !== bottleId
      })
        this.setState({
          wines: bottleFilter,
          filteredWine: bottleFilter,
        }, () => {
          this.props.history.push('/')
        })
    })
}




handleUnMount = () => {
  console.log("handleUnMount called")
  this.setState({
    errorMessage: null
  })
}

  render() {

    const {loggedInUser, errorMessage, wines, filteredWine, showPage} = this.state

    if (!showPage) {
      return <Spinner animation="grow" variant="danger" style= {{marginLeft: "50px"}}/>
    }

    return (
      <div>
        <NaviBar loggedInUser={loggedInUser} onLogout={this.handleLogOut}/>
        <p></p>
        {/* {loggedInUser ? <p>User is: {loggedInUser.username} </p>: <p>null</p>} */}

        <Switch>
        <Route exact path="/" render={() => {
              return <WineBottles loggedInUser={loggedInUser} wines={filteredWine} onClick={this.sortByYear} onClick={this.sortByPrice} onEdit={this.editBottle} onDelete={this.deleteBottle} onChange={this.searchBottle} /*onClick={this.whiteColorFilter}*//> 
        }} />
        <Route path="/sign-in" render={(rProps) => {
          return <SignIn onUnmount={this.handleUnMount} errorMessage={errorMessage} onSignIn={this.handleSignIn} {...rProps} />
        }}/>

        <Route path="/sign-up" render={(rProps) => {
          return <SignUp onUnmount={this.handleUnMount} errorMessage={errorMessage} onSignUp={this.handleSignUp} {...rProps} />
        }}/>

        <Route path="/add-bottle" render={(rprops) => {
          return <AddBottle loggedInUser={loggedInUser} onAdd={this.addBottle} {...rprops}/>
        }}/>

        <Route exact path="/bottle/:bottleId" render={(rProps) => {
          return <BottleDetails onDelete={this.deleteBottle} loggedInUser={loggedInUser} {...rProps}/>
        }}/>

        <Route path="/bottle/:bottleId/edit" render={(rprops) => {
          return <EditBottle loggedInUser={loggedInUser} onEdit={this.editBottle} {...rprops}/>
        }}/>

        <Route exact path="/profile" render={(rprops) => {
          return <Profile onDelete={this.deleteBottle} loggedInUser={loggedInUser} wines={filteredWine} {...rprops}/>
        }}/>

        <Route path="/profile/edit" render={(rprops) => {
          return <EditProfile loggedInUser={loggedInUser} onEdit={this.editProfile} wines={filteredWine} {...rprops}/>
        }}/>

        

        <Route exact path="/profile/:userId" render={(rprops) => {
            return <UserProfile loggedInUser={loggedInUser} {...rprops}/>
          }} />


        <Route exact path="/buy/:bottleId" render={(rprops) => {
            return <BuyBottle loggedInUser={loggedInUser} {...rprops}/>
          }} />


        {/* <Route path="/bottle/:bottleid/buy" render={(rprops) => {
          return <BuyBottleForm {...rprops}/>
        }}/> */}

        {/* <Route path="" */}
     </Switch>
      </div>
    )
  }
}

export default withRouter(App)