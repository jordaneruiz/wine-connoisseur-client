import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default function WineBottles(props) {
  //console.log(props.wines);
  return (
    <div className="box">
      <h1>WINE BOTTLES PAGE</h1>
      <Link to={"/add-bottle"}>Sell a bottle</Link>

      <div className="middlebox">
      {
        props.wines.map((bottle) => {
        return (
          
          <div className="subbox">
          <Link to={`/bottle/${bottle._id}`}>
            <p key={bottle._id}>{bottle.name}</p>
          </Link>

          <div className="flex flex-wrap -m-3"> 
              <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="bg-cover h-48" style={{backgroundImage: "url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900);"}}></div>
                <div className="p-4 flex-1 flex flex-col" >
                    <h3 className="mb-4 text-2xl">My heading</h3>
                    <div className="mb-4 text-grey-darker text-sm flex-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <a href="#" className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" >Twitter</a>
                </div>
                </div>  
            </div>
            </div>

          </div>
        );
      })}
      </div>
    </div>
  );
}

//export default withRouter(WineBottles)

// <Link to={`/bottle/${bottle._id}`}>
//                         <p key={bottle._id}>{bottle.name}</p>
//                         </Link>
