import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div className="navbar">
        <h1>Chingu 🖊️</h1>
        <div className="navbar-button">
            <button><Link to={props.location === "home" ? "/fullpage" : "/"}><i className="fa fa-expand fa-lg"></i> {props.location === "home" ? "Full Screen" : "Home screen"} </Link></button> 
            <button onClick={props.func}><i className="fa fa-retweet fa-lg"></i>Run</button>
            <button onClick={props.clr}><i className="fa fa-trash" style={{fontSize:'1rem'}}></i>Clear All</button>
        </div>
            
        </div>
    )
}

export default Navbar
