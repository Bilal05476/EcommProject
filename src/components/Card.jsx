import './css/Card.css';
import {NavLink} from 'react-router-dom';
const Card = (props) => {
    return(
        <NavLink className="link" to={`/shop/${props.id}`}>
            <div className="card-deck my-4">
                <div key={props.id} className="card">
                    <img className="product__img" src={props.img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        {props.title} 
                        </h5>
                        <p className="card-text text-center text-success product__price">
                            $ {props.price}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Card;