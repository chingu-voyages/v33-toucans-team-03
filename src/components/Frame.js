import React from 'react';


function Frame(props) {
    const html = props.html;
    const js = `<script>${props.js}</script> </body></html>`;
    const cs = `<html><head></head><style>${props.css}</style><body>`;
    return (
        <div className = "CompleteFrame">
            <iframe srcDoc={cs + html + js} title="Hey you will see the webpage here"></iframe>
        </div>
    )
}

export default Frame
