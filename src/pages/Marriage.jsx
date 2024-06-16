import React, { useEffect, useState } from 'react'
import './Marriage.css'
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { addDestinationToCartAPI, addParticipenceAPI, addStageToCartAPI, addToCartAPI, allDestinationAPI, allFoodAPI, allHillstationAPI, allStageAPI, editProfileAPI, getParticipentsAPI } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewOrders from '../components/ViewOrders';

function Marriage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  const [allFoods , setAllFoods] = useState([])
  const [allstatges , setAllStages] = useState([])
  const [showRequirements , setShowRequirements] = useState(false)
  const [destinatin , setDestinatin] = useState([])
  const [hillstation , setHillstation] = useState([])
  
  const [userProfile , setUserProfile] = useState([])

  const [personalDetils , setPersonalDetils] = useState({
    phoneNumber : "",
    numberOfPersons : "",
    profileImage : ""
  })
  console.log(personalDetils);

  //state to hold values of inputbox
  const [personalData , setPersonalData] = useState({
    phoneNumber : "",
    numberOfPersons : "",
    profileImage : ""
  })

  //state to hold image url
  const [preview , setPreview] = useState("")

  //state to hold token
  const [token , setToken] = useState("")

  // state to hold order profile data
  const [orderProfile ,setOrderProfile] = useState({
    phoneNumber : "",
    numberOfPersons : "",
    profile : ""
  })

  //to hold image alrady in database
  const [existingUserimage , setexistingUserImage] = useState("")

  //to hold the url of new image
  const [previewImage , setPreviewImage] = useState("")

  

  useEffect(()=>{
    getAllstages()
  },[])

  useEffect(()=>{
    getAllFoods()
  },[])


  useEffect(()=>{
    if(personalDetils.profileImage){
      setPreview(URL.createObjectURL(personalDetils.profileImage))
    }
  },[personalDetils.profileImage])
  console.log(preview);


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  console.log(token);

  useEffect(()=>{
    if(sessionStorage.getItem("phoneNumber","numberOfPersons")){
      setShowRequirements(true)
    }
  })

  //get all destination
  useEffect(()=>{
    getDestination()
  },[])

  //get all hillstation
  useEffect(()=>{
    getHillstation()
  },[])

  useEffect(()=>{
    getUserProfile()
  },[])
  console.log(userProfile);


  const getAllFoods = async()=>{
    const result = await allFoodAPI()
    // console.log(result.data);
    setAllFoods(result.data)
  }
  console.log(allFoods);


  const getAllstages = async()=>{
    const result = await allStageAPI()
    // console.log(result.data);
    setAllStages(result.data)
  }
  console.log(allstatges);

  const getDestination = async()=>{
    const result = await allDestinationAPI()
    // console.log(result.data);
    setDestinatin(result.data)
  }
  console.log(destinatin);

  const getHillstation = async()=>{
    const result = await allHillstationAPI()
    // console.log(result.data);
    setHillstation(result.data)
  }
  console.log(hillstation);


  //submit number of participents
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const {phoneNumber,numberOfPersons,profileImage} = personalDetils

    if(!phoneNumber || !numberOfPersons || !profileImage){
      toast.error('Please fill all the detils')
    }
    else{
      const reqBody = new FormData()
      reqBody.append("phoneNumber",phoneNumber)
      reqBody.append("numberOfPersons",numberOfPersons)
      reqBody.append("profileImage",profileImage)

    
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

        const result = await addParticipenceAPI(reqBody, reqHeader)
        console.log(result);

        if(result.status===200){
          console.log(result.data);
          sessionStorage.setItem("numberOfOrder",JSON.stringify(result.data))
          sessionStorage.setItem("numberOfPersons",JSON.stringify(result.data.numberOfPersons))
          sessionStorage.setItem("phoneNumber",JSON.stringify(result.data.phoneNumber))
          toast.success('Number of person added Success fully...Now you select youer requirements')
          setShowRequirements(true)
          
        }
        else{
          toast.error(result.response.data)
        }
      }

    }
  }

  //add oredrs to cart
  const handleOrder = async(item)=>{
    // e.preventDefault()
    console.log(item);

    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      const result = await addToCartAPI(item,reqHeader)
      console.log(result);

      if(result.status === 200){
        toast.success('Food added successfully')
      }
      else{
        toast.error(result.response.data)
      }
    }

  }

  //add decaratin works to cart
  const handleOrder1 = async(item)=>{
    console.log(item);

    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      const result = await addStageToCartAPI(item,reqHeader)
      console.log(result);

      if(result.status === 200){
        toast.success('Stage added successfully')
      }
      else{
        toast.error(result.response.data)
      }
    }
  }

  //add destination to cart
  const handleOrder2 = async(item)=>{
    console.log(item);
    
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      const result = await addDestinationToCartAPI(item,reqHeader)
      console.log(result);

      if(result.status === 200){
        toast.success('Destination added successfully')
      }
      else{
        toast.error(result.response.data)
      }
    }
  }

  //get Number of particepents

  const getUserProfile = async()=>{
    const token = sessionStorage.getItem("token")  
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getParticipentsAPI(reqHeader)
      console.log(result.data);
      setUserProfile(result.data)
      
    
  }

  

  return (
    <>
    <Header mevent/>

    <div className="row bg-img">
        <h2 className='text-center text-light fw-bolder' style={{marginTop:'250px',marginBottom:'100px'}}><span style={{color:'green'}}>Make The</span> <span style={{color:'red'}}>Event With Us</span></h2>
    </div>
    <div className="row">
      <div className="row">
          <div className="col-2"></div>
          <div className="col-8 horizontal mt-5"><h2 className='text-center mt-3'>Destination Wedding</h2></div>
          <div className="col-2"></div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center flex-column">
        <p className='ms-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi minima accusantium debitis. Repudiandae blanditiis sit harum deleniti possimus, a doloremque inventore praesentium veniam dicta! Architecto totam impedit id minus unde!</p>

         
          <div className='d-flex align-items-center shadow ms-2' style={{backgroundColor:'orange',borderRadius:'8px'}}>
            <label className='col-lg-4' htmlFor='upload'>
             <input id='upload' type="file" style={{display:'none'}} onChange={(e)=>setPersonalDetils({...personalDetils,profileImage:e.target.files[0]})} />
             <img style={{width:'200px',height:'200px'}} className='rounded-circle m-4' src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjvtwqDQtKe_l3MouxaedIHf2awaQFz9p7g&usqp=CAU"} alt="no image"/>
         
            </label>
            <div className='col-6 d-flex justify-content-center align-items-center flex-column ps-5'>
               <input type="text" className='form-control mt-4' placeholder='Enter your phone number' value={personalDetils.phoneNumber} onChange={(e)=>setPersonalDetils({...personalDetils,phoneNumber:e.target.value})} />
               <input style={{width:'300px'}} type="text" className='form-control mt-4' placeholder='Enter the number of participence' value={personalDetils.numberOfPersons} onChange={(e)=>setPersonalDetils({...personalDetils,numberOfPersons:e.target.value})}/>                
                   <button onClick={handleSubmit} className='btn btn-outline-primary mt-3 rounded-pill mb-1 ms-5 me-1'>Upload</button>
             </div>
 
             
           </div>


      </div>

        <div className="col-lg-6 mb-5 mt-2 d-flex justify-content-center align-items-center">
          <img width={'500px'} height={'400px'} src="https://rainfocus.com/assets/pages/home-page/graphic-home-an-industry-leader.jpg" alt="no image" />
        </div>

    </div>

    {showRequirements &&
      <div className="row ms-1">
    <h3 className='m-4'>A Suitable Place</h3>
    <h5 className='d-flex justify-content-end pe-5'><span className='text-primary'>Beach</span> properties</h5>

    <Slider {...settings}>
      { destinatin?.length>0?
        destinatin?.map((item)=>(<div className="col-lg-3 col-md-6 col-sm-12">
        <div className='food-row'>
            <Card className='image-width'  style={{ width: '20rem',height:'30rem' }}>
              <Card.Img variant="top" width={'100%'} height={'230px'} src={item.image} />
              <Card.Body>
             <Card.Title style={{textAlign:'center',color:'orange'}}>{item.name}</Card.Title>
             <Card.Text className='pt-3'><i class="fa-solid fa-location-dot"></i> {item.location}</Card.Text>
             <div className='d-flex'>
              <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.price}</h4> <h6 className='mt-2'>/day</h6>
             </div>
             <button onClick={(e)=>handleOrder2(item)}  className='btn btn-outline-warning mt-3'><h6>ORDER</h6></button>
              </Card.Body>
            </Card>
          </div>
        </div>))
        :<p>Nothing to display</p>
        }
    </Slider>
    </div>}

    {showRequirements &&
      <div className="row ms-1">
    <h5 className='d-flex justify-content-end pe-5'><span className='text-primary'>Hillstation</span> Properties</h5>

    <Slider {...settings}>
      { hillstation?.length>0?
        hillstation?.map((item)=>(<div className="col-3">
        <div className='food-row'>
            <Card className='image-width'  style={{ width: '20rem',height:'30rem' }}>
              <Card.Img variant="top" width={'100%'} height={'230px'} src={item.image} />
              <Card.Body>
             <Card.Title style={{textAlign:'center',color:'orange'}}>{item.name}</Card.Title>
             <Card.Text className='pt-3'>{item.location}</Card.Text>
             <div className='d-flex'>
              <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.price}</h4> <h6 className='mt-2'>/day</h6>
             </div>
             <button onClick={(e)=>handleOrder2(item)} className='btn btn-outline-warning mt-3'><h6>ORDER</h6></button>
              </Card.Body>
            </Card>
          </div>
        </div>))
        :<p>Nothing to display</p>
        }
    </Slider>
    </div>}

    
      {showRequirements &&
        <div className="row ms-1">
    <h3 className='m-4'>Order youer food</h3>

    <Slider {...settings}>
      { allFoods?.length>0?
        allFoods?.map((item)=>(<div className="col-3">
        <div className='food-row'>
            <Card className='image-width'  style={{ width: '20rem' }}>
              <Card.Img variant="top" width={'100%'} height={'230px'} src={item.image} />
              <Card.Body>
             <Card.Title style={{textAlign:'center',color:'orange'}}>{item.name}</Card.Title>
             <Card.Text className='pt-3'>{item.description.slice(0,60)}...</Card.Text>
             <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.price}</h4>
             <button onClick={(e)=>handleOrder(item)} className='btn btn-outline-warning mt-2'><h6>ORDER</h6></button>
              </Card.Body>
            </Card>
          </div>
        </div>))
        :<p>Nothing to display</p>
        }
    </Slider>
    </div>}

    { showRequirements &&
      <div className="row ms-1">
    <h3 className='m-4'>Decaration works</h3>
    <Slider {...settings}>
      { allstatges?.length>0?
        allstatges?.map((item)=>(<div className="col-3">
        <div className='food-row'>
            <Card className='image-width'  style={{ width: '20rem' }}>
              <Card.Img variant="top" width={'100%'} height={'230px'} src={item.image} />
              <Card.Body>
             <Card.Title style={{textAlign:'center',color:'orange'}}>{item.packageName}</Card.Title>
             <Card.Text className='pt-3'>{item.discription.slice(0,70)}...</Card.Text>
             <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.pricing}</h4>
             <button onClick={(e)=>handleOrder1(item)} className='btn btn-outline-warning mt-2'><h6>ORDER</h6></button>
              </Card.Body>
            </Card>
          </div>
        </div>)):<p>Nothing to display</p>
        }
    </Slider>
    </div>}

    <ViewOrders/>

    <ToastContainer theme='colored' autoClose={2000} position='top-center'/>
    </>
  )
}

export default Marriage