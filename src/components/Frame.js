import React from 'react';
import { Link } from 'react-router-dom'

function Frame(props) {
    const html = props.html;
    const js = `<script>${props.js}</script> </body></html>`;
    const cs = `<html><head></head><style>${props.css}</style><body>`;
    return (
        <div>
            <button><Link to={props.location === "home" ? "/fullpage" : "/"} >{props.location === "home" ? "Full Screen":"Home screen"}</Link></button>
            <iframe srcDoc={cs + html + js} title="Hey you will see the webpage here" height="700" width="800"></iframe>
        </div>
    )
}

export default Frame
