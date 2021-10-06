import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    let style={}
    let style1={
        background: "rgb(157, 148, 240)",
        color:'Black'
    }
    let dropdownStyle = {}
    if(props.mode === "light") {
        dropdownStyle = {
            background:'rgb(157, 148, 240)',
            borderColor:'rgb(157, 148, 240)',
            color: 'black'
        }
    }
    else if(props.mode === "dark"){
        style={
            background:"linear-gradient(to right, rgb(23, 23, 23), rgb(68, 68, 68))",
            color: 'white'
        }
        style1={
            background:'rgb(218, 0, 55)',
            borderColor:'rgb(218, 0, 55)',
            color: 'white'
        }
        dropdownStyle = {
            background:'rgb(68, 68, 68)',
            borderColor:'rgb(68, 68, 68)',
            color: 'white'
        }
    }
    else if (props.mode === "space") {
        style={
            background:"linear-gradient(to right, rgb(8, 32, 50), rgb(51, 71, 86))",
            color: 'white'
        }
        style1={
            background:'rgb(255, 76, 41)',
            borderColor:'rgb(255, 76, 41)',
            color: 'white'
        }
        dropdownStyle = {
            background:'rgb(51, 71, 86)',
            borderColor:'rgb(51, 71, 86)',
            color: 'white'
        }
    }
    else if (props.mode === "neon") {
        style={
            background:"linear-gradient(to right, rgb(82, 5, 123), rgb(137, 44, 220))",
            color: 'white'
        }
        style1={
            background:'rgb(0, 0, 0)',
            borderColor:'rgb(0, 0, 0)',
            color: 'white'
        }
        dropdownStyle = {
            background:'rgb(137, 44, 220)',
            borderColor:'rgb(137, 44, 220)',
            color: 'white'
        }
    }
    else if (props.mode === "retro") {
        style={
            background:"linear-gradient(to right, rgb(74, 169, 108), rgb(159, 230, 160))",
            color: 'rgb(86, 74, 74)'
        }
        style1={
            background:'rgb(245, 92, 71)',
            borderColor:'rgb(245, 92, 71)',
            color: 'black'
        }
        dropdownStyle = {
            background:'rgb(86, 74, 74)',
            borderColor:'rgb(86, 74, 74)',
            color: 'white'
        }
    }
    return (
        <div className="navbar" style={style}>
        <h1>Chingu 🖊️</h1>
        <div className="navbar-button">
            <button style={style1}><Link to={props.location === "home" ? "/fullpage" : "/"} style={style1}><i className="fa fa-expand fa-lg"></i> {props.location === "home" ? "Full Screen" : "Home screen"} </Link></button> 
            <button onClick={props.func} style={style1}><i className="fa fa-retweet fa-lg"></i>Run</button>
            <button onClick={props.clr} style={style1}><i className="fa fa-trash" style={{fontSize:'1rem'}}></i>Clear All</button>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" style={style1} data-bs-toggle="dropdown" aria-expanded="false">
                    Select Theme
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><i className="dropdown-item" onClick={props.setModeToLight} style={dropdownStyle}>Default(light)</i></li>
                    <li><i className="dropdown-item" onClick={props.setModeToDark} style={dropdownStyle}>Dark</i></li>
                    <li><i className="dropdown-item" onClick={props.setModeToSpace} style={dropdownStyle}>Space</i></li>
                    <li><i className="dropdown-item" onClick={props.setModeToNeon} style={dropdownStyle}>Neon</i></li>
                    <li><i className="dropdown-item" onClick={props.setModeToRetro} style={dropdownStyle}>Retro</i></li>
                </ul>
            </div>
        </div>
            
        </div>
    )
}

export default Navbar