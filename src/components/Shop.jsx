// import AllProduct from "./AllProd.json";
import { NavLink } from "react-router-dom";
import "./css/Shop.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import db from "../firebase";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    db.collection("allProducts").onSnapshot((snapshot) =>
      setAllProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className='shop__div' data-aos='zoom-in'>
      <div className='product__details'>
        <h5 className='text-light text-center'>All Products</h5>
      </div>
      <div className='container'>
        <nav aria-label='breadcrumb' className='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Shop
            </li>
          </ol>
        </nav>
      </div>
      <div className='container-fluid bg-light'>
        <div className='container'>
          <div className='row'>
            {allProducts.map((product, ind) => {
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
export default Shop;
