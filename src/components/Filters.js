import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../StyleSheet/App.css";
import "../StyleSheet/filters.css";

const Filters = (props) => {
    // const { filter } = props; // Retrieve the wines prop
console.log("3 props is: ", props)




    return (

        <div class="filterbox">

           
            <ButtonGroup className="filter-nav" aria-label="color-filter">
            <section>
            <Button className="filter-btn" variant="" onClick={() => { props.onClick("White") }}>White</Button>
            <Button className="filter-btn" variant="" onClick={() => { props.onClick("Red") }}>Red</Button>
            <Button className="filter-btn" variant="" onClick={() => { props.onClick("Rosé") }}>Rosé</Button>
            <Button className="filter-btn" variant="" onClick={() => { props.onClick("Sparkling") }}>Sparkling</Button>
                <div class="animation start-home"></div>
            </section>
            </ButtonGroup>

            {/* <input className="searchBar" onChange={props.onChange} type="text" placeholder="Search"></input>
            <div><button type="submit" class="btn-hover color-11"><Link to={"/add-bottle"} style={{ color: "white" }}>Sell a bottle</Link></button></div>
            <div><button onClick={() => { props.onClick(props.sortByYear) }} type="submit" class="btn-hover color-11" style={{ color: "white" }}>Filter by Year</button></div>
            <div><button onClick={() => { props.onClick(props.sortByPrice) }} type="submit" class="btn-hover color-11" style={{ color: "white" }}>Filter by Price</button></div> */}

            {/* </div> */}
        </div>


    );
};

export default Filters;


