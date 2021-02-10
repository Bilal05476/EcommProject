import "./css/Header.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import logo from "./img/weblogo.png";
import { useState } from "react";
import { auth, provider } from "../firebase";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ basket }, dispatch] = useStateValue();
  const [{ user }] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setName("");
    setPassword("");
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className='fixed-top'>
        <div className='container-fluid bg-dark ' data-aos='fade-up'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 secondary__header bg-dark'>
                <h3 className='bg-dark text-light'>
                  <i className='fa fa-map-marker bg-dark'></i> &nbsp; 256,
                  Karachi, Pakistan | 7:30 Am - 11:00 Pm
                </h3>
                {!user ? (
                  <h3 className='bg-dark text-light'>
                    <i className='fa fa-street-view bg-dark'></i> &nbsp;{" "}
                    <button
                      data-toggle='modal'
                      data-target='#LoginModal'
                      className='credential'>
                      Sign In
                    </button>{" "}
                    /{" "}
                    <button
                      data-toggle='modal'
                      data-target='#RegisterModal'
                      className='credential'>
                      Register
                    </button>{" "}
                    &nbsp; | &nbsp; <i className='fa fa-search bg-dark'></i>
                  </h3>
                ) : (
                  <h3 className='bg-dark text-light'>
                    <i className='fa fa-street-view bg-dark'></i> &nbsp;{" "}
                    <button
                      data-toggle='modal'
                      data-target='#AccountModal'
                      className='credential'>
                      Account
                    </button>{" "}
                    /{" "}
                    <button onClick={signOut} className='credential'>
                      Sign Out
                    </button>{" "}
                    &nbsp; | &nbsp; <i className='fa fa-search bg-dark'></i>
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>

        <nav
          className='navbar navbar-expand-md navbar-light'
          data-aos='slide-in'>
          <div className='container'>
            <NavLink to='/' className='navbar-brand logo'>
              <img src={logo} alt='organic product' />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </button>

            <div className='collapse navbar-collapse navigation' id='navbarNav'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink to='/' exact className='nav-link'>
                    HOME
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/shop' exact className='nav-link'>
                    SHOP
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/blog' exact className='nav-link'>
                    BLOG
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/about' exact className='nav-link'>
                    ABOUT US
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/contact' exact className='nav-link'>
                    CONTACT US
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/wishlist' exact className='nav-link'>
                    WISHLIST
                  </NavLink>
                </li>
                <li className='nav-item basket'>
                  <NavLink to='/cart' exact className='text-dark'>
                    <i className='fa fa-cart-plus'></i>
                    <span>{basket?.length}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* LoginModal */}
      <div
        className='modal fade'
        id='LoginModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='eModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <h4>Get Started</h4>
              <h6>
                Sign In to organize and share your favorite items and shops
              </h6>
              <button
                onClick={googleSignIn}
                type='submit'
                className='btn btn-danger my-4 google__btn '
                data-dismiss='modal'
                aria-label='Close'>
                <i className='fa fa-google'></i> Sign In with Google
              </button>
              <h6 style={{ fontSize: 10 }}>
                We'll never post without your permission
              </h6>
              <hr />
              <p className='text-center' style={{ fontSize: 8 }}>
                OR
              </p>
              <hr />
              <form>
                <input
                  className=' my-2'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  name='email'
                  required
                />
                <input
                  className=' my-2'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  name='password'
                  required
                />
                <button
                  onClick={signIn}
                  type='submit'
                  className='btn btn-block my-1 sign__btn'
                  data-dismiss='modal'
                  aria-label='Close'>
                  Sign In
                </button>
              </form>
              <div className='text-center my-4' style={{ fontSize: 12 }}>
                Don't Have an Account? &nbsp;
                <button
                  data-toggle='modal'
                  data-target='#RegisterModal'
                  className='credential text-primary'
                  data-dismiss='modal'
                  aria-label='Close'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RegisterModal */}
      <div
        className='modal fade'
        id='RegisterModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='eModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <h4>Get Started</h4>
              <h6>
                Sign Up to organize and share your favorite items and shops
              </h6>
              <button
                onClick={googleSignIn}
                type='submit'
                className='btn btn-danger my-4'
                data-dismiss='modal'
                aria-label='Close'>
                <i className='fa fa-google'></i> Sign In with Google
              </button>
              <h6 style={{ fontSize: 10 }}>
                We'll never post without your permission
              </h6>
              <hr />
              <p className='text-center' style={{ fontSize: 8 }}>
                OR
              </p>
              <hr />
              <form>
                <input
                  className=' my-2'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Full Name'
                  name='name'
                  required
                />
                <input
                  className=' my-2'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  name='email'
                  required
                />
                <input
                  className=' my-2'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  name='password'
                  required
                />
                <button
                  onClick={register}
                  type='submit'
                  className='btn btn-block my-1 sign__btn'
                  data-dismiss='modal'
                  aria-label='Close'>
                  Sign Up
                </button>
              </form>
              <div className='text-center my-4' style={{ fontSize: 12 }}>
                Have an Account? &nbsp;
                <button
                  data-toggle='modal'
                  data-target='#LoginModal'
                  className='credential text-primary'
                  data-dismiss='modal'
                  aria-label='Close'>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Detail */}
      {user ? (
        <div
          className='modal fade'
          id='AccountModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='eModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='ModalLabel'>
                  Account Datails
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-center my-3'>
                {user.displayName === null ? (
                  <h3 className='text-success'>
                    Sign In with Email and Password
                  </h3>
                ) : (
                  <>
                    <h3 className='text-success'>Sign In with Google Auth</h3>
                    <h3 className='my-3'>Name: {user.displayName}</h3>
                  </>
                )}
                <h3 className='my-3'>Email: {user.email}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='modal fade'
          id='AccountModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='eModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='ModalLabel'>
                  Account Datails
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-center my-3'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
