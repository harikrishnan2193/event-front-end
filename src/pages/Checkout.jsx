import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenContext } from '../context/ContextShare';

function Checkout() {
  const {isToken ,setIsToken} = useContext(isTokenContext)

  const navigate = useNavigate()
  const [checkout , setCheckOut] = useState({
    name:"",
    email:"",
    contact:"",
    place:""
  })
  console.log(checkout);

  const handleSubmit = ()=>{
    const {name,email,contact,place} = checkout
    if(!name || !email || !contact || !place){
      alert('please fill the form completelly')
    }
    else{
      alert(
      `name : ${name} , 
      email : ${email} ,
      contact : ${contact} ,
      place : ${place} ,
      Your order placed successfully...
        `)
        //
        setIsToken(false)
        //
        sessionStorage.removeItem("numberOfOrder")
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("phoneNumber")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("numberOfPersons")

        // setTimeout(()=>{
          navigate('/')
        // },2500)
    }
  }

  return (
    <>
      <h2 className='text-center mt-5'>Enter Detils</h2>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 mb-5 d-flex justify-content-center align-items-center">
          <img height={'470px'}  src="https://www.socialshakeupshow.com/wp-content/uploads/2019/01/partay.gif" alt="no image" />
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <form className='mt- form-control shadow'>
            <div className='d-flex align-items-center flex-column'>
                <input onChange={(e)=>setCheckOut({...checkout,name:e.target.value})} value={checkout.name} className='form-control mt-4 w-75' type="text" placeholder='Enter your name' />
                <input onChange={(e)=>setCheckOut({...checkout,email:e.target.value})} value={checkout.email} className='form-control mt-3 w-75' type="text" placeholder='Enter your e-mail' />
                <input onChange={(e)=>setCheckOut({...checkout,contact:e.target.value})} value={checkout.contact} className='form-control mt-4 w-75' type="text" placeholder='Enter your contact number' />
                <input onChange={(e)=>setCheckOut({...checkout,place:e.target.value})} value={checkout.place} className='form-control mt-3 w-75' type="text" placeholder='Enter your place' />
                <button onClick={handleSubmit} className='btn btn-outline-dark w-75 rounded-pill mb-4 mt-3 '>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default Checkout