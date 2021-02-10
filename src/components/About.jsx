import {NavLink} from 'react-router-dom';
import Aboutus from './Aboutus.json';
import './css/About.css'

const About = () => {
    return (
        <>
        <div className="about__div" data-aos="zoom-in">
            <div className="product__details">
                <h5 className="text-light text-center">About Us</h5>
            </div>
            <div className="container">
            <nav aria-label="breadcrumb" className="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
            </nav>
            </div>
            <div className="container farms__div">
                <div className="row">
                <div className="col-12">
                {Object.keys(Aboutus).map(item => {
                    const about = Aboutus[item]
                    return(
                        <div className="farms" key={about.id}>
                            <img src={about.img} alt="farm"/>
                            <h4>{about.title}</h4>
                            <p>{about.desc}</p>
                        </div>
                    )
                })}
                </div>
            </div>
            </div>
        </div>
        <div className="subscriber__div subscriber__about" data-aos="fade-up">
            <div className="subs">
                <h2>Subscribe now and save</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, fuga id? Repudiandae, ipsa? Consequatur exercitationem assumenda dignissimos quod sit quis.</p>
                <div className="input__div">
                    <input className="form-control" type="text" placeholder="Your email address" />
                    <button className="btn btn-success"><i className="fa fa-plane"></i></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
