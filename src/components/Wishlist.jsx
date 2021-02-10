import {NavLink} from 'react-router-dom';
import WishListProduct from './WishListProduct';
import {useStateValue} from '../StateProvider';

const WishList = () => {
    const [{wishlist}] = useStateValue();
    return (
        <>
        <div className="cart__div" data-aos="zoom-in">
            <div className="product__details">
                <h5 className="text-light text-center">My Wishlist</h5>
            </div>
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="container" data-aos="fade-up">
            <div className="cart row">
            <div className="cart__content col-md-12">
            {wishlist?.length === 0 ? (
                <div>
                    <h2 className="text-center basket__heading my-5">Your Wishlist is Empty :(</h2>
                </div>
            ): (
                <div>
                    <h2 className="text-center basket__heading my-5">Your Wishlist</h2>
                    {wishlist.map((item, ind) => (
                        <WishListProduct
                        key={ind}
                        id={item.id}
                        img={item.img}
                        price={item.price}
                        title={item.title} />
                    ))}
                </div>
            )}
            </div>
        </div>
        </div>
        </>

    )
}

export default WishList;
