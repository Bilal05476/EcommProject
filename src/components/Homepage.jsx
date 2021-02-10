import "./css/HomePage.css";
import Card from "./Card";
import StoreProd from "./Store.json";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../firebase";
const HomePage = () => {
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
  return (
    <>
      <div className='homepage bg-light' data-aos='zoom-in'>
        <h2>EAT WELL, LIVE BETTER</h2>
        <h5>Taste & quality you can trust</h5>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi
          delectus sed, adipisci, veniam cumque laboriosam nulla nobis ea et
          doloribus distinctio? Unde, <br />
          iure earum ipsam labore dolorum eveniet quibusdam? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. <br /> Dolorum ad atque vitae
          ipsa porro perspiciatis fugit ut neque explicabo autem.
        </p>
        <NavLink to='/shop'>
          <button className='btn btn-success'>Shop now</button>
        </NavLink>
      </div>
      <div className='container store__div ' data-aos='fade-in'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center'>WELCOME TO STORE</h2>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {Object.keys(StoreProd).map((item) => {
            const prod = StoreProd[item];
            return (
              <div key={prod.id} className='col-md-4 text-center'>
                <img
                  className='image__div'
                  src={prod.img}
                  width='30%'
                  alt='burger'
                />
                <h5>{prod.title}</h5>
                <p className='text-center'>{prod.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='deal__div' data-aos='fade'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='text-center'>Deal of that day</h2>
            </div>
            <div className='col-md-6 text-right div1'>
              <p className='text-success'>200g carrot -------- </p>
              <p className='text-light'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Ut, inventore? lorem ipsum
              </p>
            </div>
            <div className='col-md-6 text-left div2'>
              <p className='text-success'> -------- 500g corn </p>
              <p className='text-light'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Ut, inventore? lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='price__div' data-aos='fade-up'>
        <div className='price'>
          <h2>Price : $15.00</h2>
          <button className='btn btn-success'>Add to cart</button>
        </div>
      </div>

      <div className='container-fluid product__div bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-5'>
              <h2 className='text-center'>OUR PRODUCTS</h2>
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

      <div className='subscriber__div' data-aos='fade-up'>
        <div className='subs'>
          <h2>Subscribe now and save</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            fuga id? Repudiandae, <br /> ipsa? Consequatur exercitationem
            assumenda dignissimos quod sit quis.
          </p>
          <div className='input__div'>
            <input
              className='form-control'
              type='text'
              placeholder='Your email address'
            />
            <button className='btn btn-success'>
              <i className='fa fa-plane'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
