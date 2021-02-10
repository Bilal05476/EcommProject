import { NavLink } from "react-router-dom";
import "./css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className='contact__div' data-aos='zoom-in'>
        <div className='product__details'>
          <h5 className='text-light text-center'>Contact Us</h5>
        </div>
        <div className='container'>
          <nav aria-label='breadcrumb' className='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Contact
              </li>
            </ol>
          </nav>
          <div className='row'>
            <div className='col-md-6 contact__div1' data-aos='fade-in'>
              <strong>Check here for the FAQ</strong>
              <p>Get the details on the commonly asked question</p>
              <br />
              <strong>Contact information:</strong>
              <div>
                <p className='text-secondary'>
                  <i className='fa fa-map-marker text-success'></i> 256,
                  Karachi, Pakistan &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                  <i className='fa fa-street-view text-success'></i> 7:30 Am -
                  11:00 Pm
                </p>
                <p className='text-secondary'>
                  <i className='fa fa-phone text-success'></i> (92) 300 348000
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <i className='fa fa-envelope text-success'></i>{" "}
                  example@outlokk.com
                </p>
              </div>
            </div>
            <div className='col-md-4 contact__div2' data-aos='fade-in'>
              <h1>
                <strong>LET'S GET IN TOUCH</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                temporibus harum placeat adipisci. Magni, earum! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Pariatur in
                blanditiis reprehenderit animi consequatur sit!
              </p>
              <div className='row'>
                <div className='col-md-6 my-3'>
                  <input
                    className='form-control'
                    type='name'
                    placeholder='your name*'
                  />
                </div>
                <div className='col-md-6 my-3'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='your email*'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 my-2 py-2'>
                  <textarea
                    className='form-control'
                    type='text'
                    rows='4'
                    placeholder='your messsage'
                  />
                </div>
              </div>
              <button className='btn btn-success my-3 py-2 text-center'>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <iframe
              className='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14145781.222651234!2d60.330378492920765!3d30.049482392292752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1611147185367!5m2!1sen!2s'
              width='630'
              height='450'
              frameBorder='0'
              style={{ border: 0 }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
              title='map'></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
