import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenContext } from '../context/ContextShare';

function Checkout() {
  const { isToken, setIsToken } = useContext(isTokenContext);
  const navigate = useNavigate();

  const [checkout, setCheckout] = useState({
    name: '',
    email: '',
    contact: '',
    place: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, place } = checkout;

    if (!name || !email || !contact || !place) {
      toast.error('Please fill out all fields.');
    } else {
      toast.success(
        <div>
          <p>
            <strong>Order Details:</strong><br />
            Name: {name}<br />
            Email: {email}<br />
            Contact: {contact}<br />
            Place: {place}
          </p>
          <button onClick={handleOkClick} className='btn btn-dark'>
            OK
          </button>
        </div>,
        {
          autoClose: false, // Prevent auto close
          closeButton: false, // Disable default close button
          position: 'top-center'
        }
      );
    }
  };

  const handleOkClick = () => {
    setIsToken(false);
    sessionStorage.clear(); // Clears all session storage items
    navigate('/');
  };

  return (
    <>
      <h2 className='text-center mt-5'>Enter Details</h2>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 mb-5 d-flex justify-content-center align-items-center">
          <img
            height='470px'
            src="https://www.socialshakeupshow.com/wp-content/uploads/2019/01/partay.gif"
            alt="Celebration"
          />
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <form className='form-control shadow p-4' onSubmit={handleSubmit}>
            <div className='d-flex align-items-center flex-column'>
              <input
                name="name"
                onChange={handleChange}
                value={checkout.name}
                className='form-control mt-4 w-75'
                type="text"
                placeholder='Enter your name'
              />
              <input
                name="email"
                onChange={handleChange}
                value={checkout.email}
                className='form-control mt-3 w-75'
                type="email"
                placeholder='Enter your email'
              />
              <input
                name="contact"
                onChange={handleChange}
                value={checkout.contact}
                className='form-control mt-4 w-75'
                type="tel"
                placeholder='Enter your contact number'
              />
              <input
                name="place"
                onChange={handleChange}
                value={checkout.place}
                className='form-control mt-3 w-75'
                type="text"
                placeholder='Enter your place'
              />
              <button
                type="submit"
                className='btn btn-outline-dark w-75 rounded-pill mb-4 mt-3'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme='colored' autoClose={2000} position='top-center' />
    </>
  );
}

export default Checkout;
