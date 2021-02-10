import { NavLink } from "react-router-dom";
// import {useStateValue} from '../StateProvider';
import PlaceOrder from "./PlaceOrder";
import { useState } from "react";
import payment from "./img/paymentMethods.png";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./css/Checkout.css";

const Checkout = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <>
      <div className='cart__div' data-aos='zoom-in'>
        <div className='product__details'>
          <h5 className='text-light text-center'>Checkout</h5>
        </div>
        <div className='container'>
          <nav aria-label='breadcrumb' className='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Checkout
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='container-fluid' data-aos='zoom-in'>
        <div className='row'>
          <div className='cart__content col-md-8'>
            <div className='creditCard'>
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
            </div>
            <form className='paymentCard'>
              <div className='row'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    required
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    required
                    name='name'
                    placeholder='Card Holder Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </div>
              <div className='row formGroup'>
                <div className='form-group formSpecial'>
                  <input
                    type='text'
                    className='form-control'
                    required
                    name='expiry'
                    value={expiry}
                    placeholder='MM/YY'
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='tel'
                    className='form-control'
                    required
                    placeholder='CVV'
                    value={cvc}
                    name='cvc'
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </div>
              <img
                className='payment'
                width='40%'
                src={payment}
                alt='payment-methods'
              />
              <NavLink to='/cart' className='goToShop'>
                <h6>
                  <i className='fa fa-angle-left'></i> Go to Cart
                </h6>
              </NavLink>
            </form>
          </div>
          <div className='checkout__right col-md-4' data-aos='fade-up'>
            <PlaceOrder />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
