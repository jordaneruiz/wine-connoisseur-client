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

// import BuyBottleForm from "./components/BuyBottleForm";



//import {API_URL} from './config'



class App extends Component {

  state = {
    wines: [], 
    filteredWine: [],
    loggedInUser: null, 
    errorMessage: null, 
  }



  componentDidMount() {
    //check if the user is loogenin or not 
    // if (!this.state.loggedInUser) {
    //   axios.get(`http://localhost:3040/api/user`/*, {withCredentials: true}*/)
    //     .then((response) => {
    //       console.log(response.data)
    //     })

    // }

 
  axios.get("http://localhost:3040/api/bottles")
  
  .then((response) => {
    // response.data
    this.setState({
      wines: response.data, 
      filteredWine: response.data,
    })
  })
}




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


  //add a new bottle for sell
  addBottle = (e) => {
    e.preventDefault()
    const {name, year, price, description, country, region, grappeVariety, color, image,} = e.target
    // const {loggedInUser} = this.state
      console.log(image.files)
    // //this is an array so you have to do it like this: 

    let imageFile = image.files[0];

    // //create a form data first (its a class in JS to create a form and create a post request)
    let uploadForm = new FormData() //its a class in JS to create a form instead of post request
    uploadForm.append('imageUrl', imageFile)//we have to send that

    // //now we create the axios post request
    axios.post(`http://localhost:3040/api/upload`, uploadForm)
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

      axios.post(`http://localhost:3040/api/add-bottle`, newBottle)
      .then((response) =>{
          this.setState({
            wines: [ response.data , ...this.state.wines]
          }, () => {
            this.props.history.push('/')
          })      
      })  
    })
  }


  editBottle = (bottle) => {
    axios.patch(`http://localhost:3040/api/bottle/${bottle._id}`, {
      name: bottle.name,
        year: bottle.year,
        price: bottle.price,
        description: bottle.description,
        country: bottle.country,
        region: bottle.region,
        grappeVariety: bottle.grappeVariety,
        color: bottle.color,
        image: bottle.image,
    })
    .then((resp) => {
      console.log("resp edit is: ", resp)
        let updatedWines = this.state.wines.map((myWine) => {
          if (myWine._id == bottle._id) {
            myWine = bottle
          }
          return myWine
        })

        this.setState({
          wines: updatedWines
        }, () => {
          this.props.history.push('/')
        })
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()

    const {username, email, password} = e.target

    axios.post(`http://localhost:3040/api/signup`, {
    //send the data of the form 
    //sendthe input as a second parameter
    username: username.value, 
    email: email.value, 
    password: password.value
    }/*, {withCredentials: true}*/)  //when the request is being made, its creatin a cookie and saving it// soeverytime the loggendin user comes back, the browser knows he is connected
    .then((response) => {
      console.log("response is :", response)
      console.log("response.data is: ", response.data)

      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/')
      })
    })

}


handleSignIn = (e) => {
  e.preventDefault()

  const {email, password} = e.target

  axios.post(`http://localhost:3040/api/signin`, {
  //send the data of the form 
  //sendthe input as a second parameter
  email: email.value, 
  password: password.value
  }/*, {withCredentials: true}*/)  
  .then((response) => {
    //console.log(response)
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
  axios.post("http://localhost:3040/api/logout", {}, {withCredentials: true})  
    .then(() => {
      this.setState({
        loggedInUser: null
      })
    })
}



deleteBottle = (bottleId) => {
  axios.delete(`http://localhost:3040/api/bottle/${bottleId}`)
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

    const {loggedInUser, errorMessage, wines, filteredWine} = this.state

    return (
      <div>
        <NaviBar loggedInUser={loggedInUser} onLogout={this.handleLogOut}/>
        <p></p>
        {loggedInUser ? <p>User is: {loggedInUser.username} </p>: <p>null</p>}

        <Switch>
        <Route exact path="/" render={() => {
              return <WineBottles loggedInUser={loggedInUser} wines={filteredWine} onChange={this.searchBottle}/> 
        }} />
        <Route path="/sign-in" render={(rProps) => {
          return <SignIn onUnmount={this.handleUnMount} errorMessage={errorMessage} onSignIn={this.handleSignIn} {...rProps} />
        }}/>

        <Route path="/sign-up" render={(rProps) => {
          return <SignUp onSignUp={this.handleSignUp} {...rProps} />
        }}/>

        <Route exact path="/bottle/:bottleId" render={(rProps) => {
          return <BottleDetails onDelete={this.deleteBottle} loggedInUser={loggedInUser} {...rProps}/>
        }}/>

        <Route path="/bottle/:bottleId/edit" render={(rprops) => {
          return <EditBottle loggedInUser={loggedInUser} onEdit={this.editBottle} {...rprops}/>
        }}/>

        {/* <Route path="/bottle/:bottleId/edit" render={(rprops) => {
          return <EditBottle loggedInUser={loggedInUser} {...rprops}/>
        }}/> */}

        <Route path="/profile" render={(rprops) => {
          return <Profile loggedInUser={loggedInUser} {...rprops}/>
        }}/>

        <Route pass="/add-bottle" render={(rprops) => {
          return <AddBottle loggedInUser={loggedInUser} onAdd={this.addBottle} {...rprops}/>
        }}/>

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