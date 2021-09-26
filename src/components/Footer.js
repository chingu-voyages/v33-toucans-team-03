const Footer = () => {
    return (
        <footer id="main-footer" className="grid">
            <div className="footer-copyrights">
                <h3><i className = "fa fa-copyright" style={{fontSize:'1rem'}}></i><i>2021ChinguPen</i></h3>
                <h4>Terms & Conditions | Privacy Policy | About | Site Map | FAQs</h4>
            </div>
            <div className = "SML">
				<i className="fa fa-facebook" style={{fontSize:'2rem',margin:'10px'}}></i>
				<i className="fa fa-twitter" style={{fontSize:'2rem',margin:'10px'}}></i>
                <i className="fa fa-github" style={{fontSize:'2rem',margin:'10px'}}></i>
            </div>
        </footer>
    )
}
export default Footer;