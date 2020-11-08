import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'
import { Navbar,  Form, FormControl, Nav, Button } from 'react-bootstrap';

export default function NaviBar(props) {
  return (


      <>
        <Navbar style={{backgroundColor: "#6e0d25", height: "6em", textColor: "#FFFFFF", marginBottom: "-30px"}} className="BackNav" bg="" variant="dark" >
          <Navbar.Brand><img src="LOGOWINECOR.png" style={{height: "80px"}}/></Navbar.Brand>
          {/* <Link className="" to="/" className="">
      <img src="LogoW1.png"/>
  </Link> */}
          <Nav className="mr-auto">
            {/* <Nav.Link to="/" className=" has-text-white">Home</Nav.Link>
            <Nav.Link to={"/add-bottle"} className=" has-text-white" >Sell</Nav.Link>
            <Nav.Link to={"/profile"} className=" has-text-white" >Profile</Nav.Link> */}
            <Link className="has-text-white" style={{paddingRight: "15px"}} to="/">Home</Link>
            <Link className="has-text-white" style={{paddingRight: "15px"}} to={"/add-bottle"}>Sell</Link>
            <Link className="has-text-white" style={{paddingRight: "15px"}} to={"/profile"}>Profile</Link>
          </Nav>
            <div className="logbtn">
            { props.loggedInUser ? (
               <button className="mr-sm-2" variant="outline-primary" className="button is-light has-background-light has-text-danger-dark" onClick={props.onLogout}>Logout</button>
                ) : (
                <>
                <Link className="mr-sm-2" variant="outline-primary" className="logbtn1 button is-primary has-background-light has-text-danger-dark" to="/sign-in">Sign In</Link>
                <Link className="mr-sm-2" variant="outline-primary" className="logbtn2 button is-primary has-background-light has-text-danger-dark" to="/sign-up">Sign Up</Link>            
                </>
              )}
          </div>
        </Navbar>
      </> 








      // {/* <Link to="/">Home</Link>

      // { props.loggedInUser ? (
      //   <button onClick={props.onLogout}>Logout</button>
      // ) : (
      //   <>
      //     <Link to="/sign-in">Sign In</Link>
      //     <Link to="/sign-up">Sign Up</Link>
      //   </>
      // )} */}
      // {/* <Link to="/Sign-in">Sign In</Link>
      //       <Link to="/Sign-up">Sign Up</Link>
      //       <button>Logout</button> */}
   
  );
}



// <>
//   <Navbar bg="light" variant="light">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-primary">Search</Button>
//     </Form>
//   </Navbar>
// </> 
// import { Navbar,  Form, FormControl, Nav, Button } from 'react-bootstrap';









{/* <nav className="navbar is-fixed-top has-background-danger-dark height" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <Link className="" to="/" className="">
      <img src="LogoW1.png"/>
  </Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu ">
    <div className="navbar-start">
      <Link className=" has-text-white" to="/">Home</Link>
      <Link className=" has-text-white" to={"/add-bottle"}>Sell</Link>
      <Link className=" has-text-white" to={"/profile"}>Profile</Link>
    </div>

    <div className="navbar-end">
      <div className="">
        <div className="buttons">
        { props.loggedInUser ? (
        <button className="button is-light has-background-light has-text-danger-dark" onClick={props.onLogout}>Logout</button>
      ) : (
        <>
          <Link className="button is-primary has-background-light has-text-danger-dark" to="/sign-in">Sign In</Link>
          <Link className="button is-primary has-background-light has-text-danger-dark" to="/sign-up">Sign Up</Link>
          </>
      )}
        </div>
      </div>
    </div>
  </div>
</nav> */}