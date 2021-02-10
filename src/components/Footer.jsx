import './css/Footer.css';
import {NavLink} from 'react-router-dom';
import logo from './img/weblogo.png';
const Footer = () => {
    return(
        <div className="container-fluid bg-dark footer" data-aos="zoom-in">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 first">
                        <img src={logo} alt="organic product" width="20%" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem omnis eum architecto laboriosam temporibus in quam optio veritatis iure.</p>
                    </div>
                    <div className="col-md-4 each">
                        <h3>
                            Customer Service
                        </h3>
                        <div className="customer">
                            <div>
                                <NavLink className="service" to="/">Product recall notices</NavLink> <br />
                                <NavLink className="service" to="/">Order information</NavLink> <br />
                                <NavLink className="service" to="/">Shipping & returns</NavLink>
                            </div>
                            <div>
                                <NavLink className="service" to="/">Privacy Policy</NavLink> <br />
                                <NavLink className="service" to="/">Terms & Conditions</NavLink> <br />
                                <NavLink className="service" to="/">FAQs</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 each">
                        <h3>
                            Contact Us
                        </h3>
                        <div>
                            <p className="bg-dark text-light"><i className="fa fa-map-marker bg-dark"></i> 256, Karachi, Pakistan</p>
                            <p className="bg-dark text-light"><i className="fa fa-street-view bg-dark"></i> 7:30 Am - 11:00 Pm</p>
                            <p className="bg-dark text-light"><i className="fa fa-phone bg-dark"></i> (92) 300 348000</p>
                        </div>
                    </div>
                    <div className="row horizontal"></div>
                </div>
                <div className="row copyright">
                    <p>&copy; Copyright || All rights reserved</p>
                    <div className="social__div">
                        <i className="fa fa-facebook-square text-dark"></i>
                        <i className="fa fa-google text-dark"></i>
                        <i className="fa fa-youtube-play text-dark"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;