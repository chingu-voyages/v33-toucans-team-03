const Footer = (props) => {
    const { mode } = props;
    let footerStyle = {}
    if (mode === "dark") {
        footerStyle= {
            color :'rgb(237, 237, 237)',
            backgroundColor: 'rgb(23, 23, 23)'
        }
    }
    else if (mode === "space" ) {
        footerStyle= {
            color :'white',
            backgroundColor: 'rgb(8, 32, 50)'
        }
    }
    else if (mode === "neon" ) {
        footerStyle= {
            color :'white',
            backgroundColor: 'rgb(82, 5, 123)'
        }
    }
    else if (mode === "retro" ) {
        footerStyle= {
            color :'rgb(86, 74, 74)',
            backgroundColor: 'rgb(74, 169, 108)'
        }
    }
    return (
        <footer id="main-footer" className="grid" style={footerStyle}>
            <div className="footer-copyrights">
                <h3><i className = "fa fa-copyright" style={{fontSize:'1rem'}}></i><i>Chingu voyage 33</i></h3>
                <p> <a href="https://www.chingu.io" target="_blank" rel="noreferrer">About</a> | <a href="https://github.com/chingu-voyages/v33-toucans-team-03" target="_blank" rel="noreferrer">Contribute</a> | FAQs</p>
            </div>
            <div className = "SML">
				<a href="https://www.linkedin.com/company/chingu-os/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" style={{fontSize:'25px',margin:'10px'}}></i></a>
				<a href="https://twitter.com/ChinguCollabs"  target="_blank" rel="noreferrer" ><i className="fa fa-twitter" style={{fontSize:'25px',margin:'10px'}}></i></a>
                <a href="https://github.com/chingu-voyages/v33-toucans-team-03" target="_blank" rel="noreferrer"><i className="fa fa-github" style={{fontSize:'25px',margin:'10px'}}></i></a>
            </div>
        </footer>
    )
}
export default Footer;