import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
        <h1>Chingu 🖊️</h1>
        <div className="navbar-button">
            <button><i class="fa fa-retweet fa-lg"></i>Run</button>
            <button><i class="fa fa-trash" style={{fontSize:'1rem'}}></i>Clear All</button>
            <button><i class="fa fa-expand fa-lg"></i>Full Screen</button>
        </div>
            
        </div>
    )
}

export default Navbar