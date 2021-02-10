import {NavLink} from 'react-router-dom';
import CartProduct from './CartProduct';
import {useStateValue} from '../StateProvider';
import SubTotal from './SubTotal';

const Cart = () => {
    const [{basket}] = useStateValue();
    return (
        <>
        <div className="cart__div" data-aos="zoom-in">
            <div className="product__details">
                <h5 className="text-light text-center">Shopping Cart</h5>
            </div>
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="container-fluid">
            <div className="cart row">
            <div className="cart__content col-md-8">
            {basket?.length === 0 ? (
                <div>
                    <h2 className="text-center basket__heading my-5">Your Basket is Empty :(</h2>
                </div>
            ): (
                <div>
                    <h2 className="text-center basket__heading my-5">Your Shopping Basket</h2>
                    {basket.map((item, ind) => (
                        <CartProduct
                        key={ind}
                        id={item.id}
                        img={item.img}
                        price={item.price}
                        title={item.title} />
                    ))}
                </div>
            )}
            <NavLink to="/shop" className="goToShop"><h6><i className="fa fa-angle-left"></i> Continue Shopping</h6></NavLink>
            </div>
            <div className="checkout__right col-md-4" data-aos="fade-up">
                <SubTotal />
            </div>
        </div>
        </div>
        </>

    )
}

export default Cart;
