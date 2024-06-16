import React, { useContext, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import './Login.css'
import Header from '../components/Header'
import { loginAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenContext } from '../context/ContextShare'

function Login() {
  const {isToken ,setIsToken} = useContext(isTokenContext)

  const [userData , setUserData] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  // console.log(userData);

  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = userData

    if(!email || !password){
      toast.error('please fill the form completlly')
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status === 200){
        //
        setIsToken(true)
        //
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)

        toast.success('Login successfull')

        setUserData({
          email:"",password:""
        })
        setTimeout(()=>{
          navigate('/event')
        },2500)
      }
      else{
        toast.error('Wrong email or password')
      }
    }
  }
  return (
    <>
    <Header login/>
        <div className="row mt-3 mb-5">
            <div className="col-2"></div>
            <div className="col-lg-8">
                <form className='border shadow'>
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                          <img className='mt-3' src="https://cdn-icons-png.freepik.com/256/3033/3033143.png?ga=GA1.1.1562127589.1693709886&" alt="no image" width={'90px'} />
                          <h1 className='fw-bold mb-3' style={{color:'black'}}>Welcome User</h1>
                          <form className='border shadow rounded w-100 mb-5 ms-5  d-flex justify-content-center' action="">
                            <div className='w-75'>
                                <input onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} className='form-control rounded-pill mt-4' type="text" placeholder='Enter your e-mail' />
                                <input onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} className='form-control rounded-pill mt-3' type="text" placeholder='Enter password' />
                                <button onClick={handleLogin}  className='btn btn-outline-dark w-100 rounded-pill mb-4 mt-3'>Login</button>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-6">
                            <div className='bg-image d-flex justify-content-center align-items-center flex-column'>
                                <h3 className='pb-2  text-white fw-bold'>Event Focus</h3>
                                <h4 className='text-white fw-bold mb-5'>Din't have an account</h4>
                                <p className='me-5 ms-2 text-center text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut odit dicta ducimus inventore mollitia, aliquam ab ullam, vel cupiditate, quaerat suscipit accusantium iste possimus ipsam. Iste dolorem praesentium quis ducimus.</p>
                                <Link to={'/register'}><button  className='btn btn-outline-light mt-4 rounded-pill mb-2'>SIGN UP</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
        <ToastContainer theme='colored' autoClose={2000} position='top-center'/>
    </>
  )
}

export default Login