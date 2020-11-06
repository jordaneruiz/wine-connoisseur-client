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
import BuyBottleForm from "./components/BuyBottleForm";



//import {API_URL} from './config'



class App extends Component {

  state = {
    wines: [], 
    loggedInUser: null, 
    errorMessage: null, 
  }


  componentDidMount() {
  axios.get("http://localhost:3040/api/bottles")
  .then((response) => {
    // response.data
    this.setState({
      wines: response.data
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
  })  
  .then((response) => {
    console.log(response)
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
          wines: bottleFilter
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

    const {loggedInUser, errorMessage, wines} = this.state

    return (
      <div>
        <NaviBar loggedInUser={loggedInUser} onLogout={this.handleLogOut}/>
        <p></p>
        {loggedInUser ? <p>User is: {loggedInUser.username} </p>: null}
        <Switch>
        <Route exact path="/" render={() => {
              return <WineBottles wines={wines} /> 
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
          return <EditBottle {...rprops}/>
        }}/>

        <Route path="/bottle/:bottleid/buy" render={(rprops) => {
          return <BuyBottleForm {...rprops}/>
        }}/>

        {/* <Route path="" */}
     </Switch>
      </div>
    )
  }
}

export default withRouter(App)