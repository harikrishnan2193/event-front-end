import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [userData , setUserData] = useState({
    username:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  console.log(userData);
  const handleRegister = async(e)=>{
    e.preventDefault()
    const{username,email,password} = userData
    if(!username || !email || !password){
      toast.info('Please fill the form completelly')
    }
    else{
      const result = await registerAPI(userData)
      console.log(result);
      if(result.status === 200){
        toast.success(`${result.data.username} registered successfully`)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/login')
      }
      else{
        toast.error(`${result.response.data}`)
      }
    }
  }
  return (
    <>
    <div style={{backgroundColor:'white',position:'relative'}}>
        <Navbar expand="lg" className="bg-body-white">
      <Container>
        <img style={{width:'45px'}} src="https://static.vecteezy.com/system/resources/previews/002/378/022/non_2x/woman-face-logo-free-vector.jpg" alt="No image" />
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'#071e31'}} to={'/'}>Event Focus</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

        <div className="row mt-3 mb-5">
            <div className="col-2"></div>
            <div className="col-lg-8">
                <form className='border shadow'>
                    <div className="row">
                    <div className="col-lg-6" style={{marginLeft:'-40px'}}>
                            <div className='bg-image d-flex justify-content-center align-items-center flex-column'>
                                <h3 className='pb-2  text-white fw-bold'>Event Focus</h3>
                                <h4 className='text-white fw-bold mb-5'>Already have an account</h4>
                                <p className='me-4 ms-4 text-center text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut odit dicta ducimus inventore mollitia, aliquam ab ullam, vel cupiditate, quaerat suscipit accusantium iste possimus ipsam. Iste dolorem praesentium quis ducimus.</p>
                                <Link to={'/login'}><button  className='btn btn-outline-light mt-4 rounded-pill mb-2'>Login</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                          <img className='mt-3' src="https://cdn-icons-png.freepik.com/256/3033/3033143.png?ga=GA1.1.1562127589.1693709886&" alt="no image" width={'90px'} />
                          <h1 className='fw-bold mb-3 mt-3' style={{color:'black'}}>Join Our Family</h1>
                          <form className='border shadow rounded w-100 mb-5 ms-5  d-flex justify-content-center' action="">
                            <div className='w-75'>
                                <input onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} className='form-control rounded-pill mt-4' type="text" placeholder='Enter your name' />
                                <input onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} className='form-control rounded-pill mt-3' type="text" placeholder='Enter your e-mail' />
                                <input onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} className='form-control rounded-pill mt-3' type="text" placeholder='Enter your Password' />
                                <button onClick={handleRegister}  className='btn btn-outline-dark w-100 rounded-pill mb-4 mt-3'>SIGN UP</button>
                            </div>
                          </form>
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

export default Register