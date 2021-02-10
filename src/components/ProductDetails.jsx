import "./css/ProductDetails.css";
import AllProduct from "./AllProd.json";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import db from "../firebase";

const ProductDetails = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    db.collection("featureProducts").onSnapshot((snapshot) =>
      setFeatureProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const { path } = useParams();
  const prod = AllProduct[path];

  const id = prod.id;
  const title = prod.title;
  const img = prod.img;
  const price = prod.price;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
      },
    });
  };
  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id,
        title,
        img,
        price,
      },
    });
  };

  // Save th data into local storage so when page Refresh data remains in state
  useEffect(() => {
    const basketItem = localStorage.getItem("my-cart");

    if (basketItem) {
      JSON.parse(basketItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(basket));
  });

  return (
    <div data-aos='zoom-in'>
      <div className='product__details'>
        <h5 className='text-light text-center'>Product Details</h5>
      </div>
      <div className='container'>
        <nav aria-label='breadcrumb' className='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='breadcrumb-item'>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Product Detail
            </li>
          </ol>
        </nav>
      </div>
      {/* SELECT PRODUCT */}
      <div className='container card-deck mx-auto my-4'>
        <div key={id} className='card details__div'>
          <div className='row'>
            <div className='col-md-2'>
              <img className='product__detail__img' src={img} alt='' />
            </div>
          </div>
          <div className='card-body'>
            <h5 className='card-title text-left'>{title}</h5>
            <p className='card-text text-left'>$ {price}</p>
            <button
              className='btn btn-success text-light mx-2 my-2'
              onClick={addToBasket}>
              ADD TO CART
            </button>
            <button
              className='btn btn-light text-success my-2'
              onClick={addToWishlist}>
              ADD TO WISHLIST
            </button>
            <hr />
            <div className='nuturition' style={{ fontSize: 14 }}>
              <h5>Nuturitional Product</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                omnis assumenda maiores blanditiis ipsum optio inventore. Fugiat
                tenetur distinctio autem est tempore laudantium delectus aliquid
                impedit, aut numquam eum velit?
              </p>
              <h4>Review</h4>
              {["Thomas", "James", "Lara"].map((item, ind) => {
                return (
                  <div key={ind} style={{ fontSize: 14 }}>
                    <strong className='text-success'>{item}</strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi modi et aliquid ipsum nihil! Itaque sapiente
                      dolore magnam aut nisi?
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <hr />
        <br />
      </div>
      {/* OTHER PRODUCT */}
      <div className='container-fluid product__div bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-5'>
              <h2 className='text-center'>OTHER PRODUCTS</h2>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
          <div className='row'>
            {featureProducts.map((product, ind) => {
              return (
                <div key={ind} className='col-md-3'>
                  <Card
                    id={product.data.id}
                    img={product.data.img}
                    title={product.data.title}
                    price={product.data.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
