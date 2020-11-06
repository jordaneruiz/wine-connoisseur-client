import React from 'react'
import {Link} from "react-router-dom"
import {withRouter} from 'react-router-dom'



export default function WineBottles(props) {

    console.log(props.wines)
    return (
        <div>
            WINE BOTTLES PAGE
            <p>wine list</p>

            {
                props.wines.map((bottle) => {
                    return (
                        <Link to={`/bottle/${bottle._id}`}>
                        <p key={bottle._id}>{bottle.name}</p>
                        </Link>
                        )
                })
            }
        </div>
    )
}

//export default withRouter(WineBottles)