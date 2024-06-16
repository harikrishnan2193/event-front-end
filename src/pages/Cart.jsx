import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteFoodAPI, deleteOrderAPI, deleteStageAPI, editProfileAPI, getDestinationFromCartAPI, getFoodFromCartAPI, getstageFromCartAPI } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {

  const [selecteddestination , setselectedDestination] = useState([])
  const [selectedStage ,setSelectedStage] = useState([])
  const [selectedFood ,setSelectedFood] = useState([])
  const [numberOfPerson , setNumberOfPerson] = useState([])
  const [total , setTotal] = useState(0)
  const [stageTotal , setStageTotal] = useState(0)
  const [destinationTotal , setDestinationTotal] = useState(0)
  const [result1 , setResult] = useState("")

  const [newNumberOfPerson, setNewNumberOfPerson] = useState({
    phoneNumber:"",
    numberOfPersons:"",
    profileImage:"",
  })

  const [isPresent , setIsPressent] = useState(true)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    if(sessionStorage.getItem("numberOfOrder")){
      const user = JSON.parse(sessionStorage.getItem("numberOfOrder"))
      console.log(user);
      setNewNumberOfPerson({...newNumberOfPerson,phoneNumber:user.phoneNumber,profileImage:user.profileImage})
    }
  },[])
  console.log(newNumberOfPerson);

  useEffect(()=>{
    getDestinationFromCart()
  },[])

  useEffect(()=>{
    getStageFromCart()
  },[])

  useEffect(()=>{
    getFoodFromCart()
  },[])

  useEffect(()=>{
    if(sessionStorage.getItem("numberOfPersons")){
      const user = JSON.parse(sessionStorage.getItem("numberOfOrder"))
      setNumberOfPerson(user.numberOfPersons)
    }
  },[isPresent])
  console.log(numberOfPerson);

  //get price of selected items
  useEffect(()=>{
    getTotal()
  },[selectedFood,selectedStage,selecteddestination,numberOfPerson])
  console.log('food total ',total);
  console.log('stage total ',stageTotal);
  console.log('destination total ',destinationTotal);
  console.log('Number of person * food total '+result1);


  //function to get price of selcted food,selcted destination and selected stage
  const getTotal= ()=>{
    if(selectedFood.length>0){
      setTotal(selectedFood?.map(item =>Number(item.price)).reduce((p1,p2)=>p1+p2))
      
    }
    else{
      setTotal(0)
    }
    if(selectedStage.length>0){
      const result = selectedStage?.find(item =>(item.price))
      setStageTotal(result.price)
    }
    else{
      setStageTotal(0)
    }
    if(selecteddestination.length>0){
      const result = selecteddestination?.find(item =>(item.price))
      setDestinationTotal(result.price)
    }
    else{
      setDestinationTotal(0)
    }

  }

  const parseNumber = (str) => {
    const cleanStr = String(str).replace(/,/g, '');
    return isNaN(cleanStr) ? 0 : Number(cleanStr);
  };

  //function to get numberOfPerson*totalFood + selectedStage + selecteddestination
  // Function to calculate the sum of totalFood , selectedStage , selecteddestination
  const calculateSum = () => {
    const num1 = parseNumber(stageTotal) || 0;
    const num2 = Number(destinationTotal) || 0;
    const num3 = Number(result1) || 0;
    return num1 + num2 + num3;

  };

  //function to get grand total ammount
  const grentatotal = ()=>{
    const result = Number(numberOfPerson) * total;
    setResult(result)
  }
  useEffect(()=>{
    calculateSum()
  },[numberOfPerson])
  useEffect(()=>{
    grentatotal()
  },[numberOfPerson,total])

  //function to get destination
  const getDestinationFromCart = async()=>{

    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await getDestinationFromCartAPI(reqHeader)
    setselectedDestination(result.data)
    
  }
  console.log(selecteddestination);

  const getStageFromCart = async()=>{

    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await getstageFromCartAPI(reqHeader)
    setSelectedStage(result.data)
    
  }
  console.log(selectedStage);

  const getFoodFromCart = async()=>{

    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await getFoodFromCartAPI(reqHeader)
    setSelectedFood(result.data)
    
  }
  console.log(selectedFood);

  //delete destination from cart
  const handleDelete = async(id)=>{
    const token =sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await deleteOrderAPI(id,reqHeader)
    console.log(result);
    if(result.status === 200){
      getDestinationFromCart()
    }
    else{
      console.log(result.response.data);
    }
  }

  //delete stage from cart
  const handleDelete1 = async(id)=>{
    const token =sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await deleteStageAPI(id,reqHeader)
    console.log(result);
    if(result.status === 200){
      getStageFromCart()
    }
    else{
      console.log(result.response.data);
    }
  }

  //delete food from cart
  const handleDelete2 = async(id)=>{
    const token =sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await deleteFoodAPI(id,reqHeader)
    console.log(result);
    if(result.status === 200){
      getFoodFromCart()
    }
    else{
      console.log(result.response.data);
    }
  }

  
  const handleUpdate = async()=>{
    const {phoneNumber,numberOfPersons,profileImage} = newNumberOfPerson

    if(!numberOfPersons){
      toast.info('plese fill the form completely')
    }
    else{
  
      const token =sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await editProfileAPI(newNumberOfPerson,reqHeader)
      console.log(result);
      if(result.status === 200){
        toast.success('Profile update successfully')
        sessionStorage.setItem("numberOfOrder",JSON.stringify(result.data))
        setIsPressent(false)
        handleClose()
        // setIsUpdate(true)
      }
      else{
        console.log(result.response.data);
      }

    }
  }
  console.log(newNumberOfPerson);
  
  return (
    <>
    

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Number Of Persons</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
            <input value={newNumberOfPerson.numberOfPersons} onChange={(e)=>setNewNumberOfPerson({...newNumberOfPerson,numberOfPersons:e.target.value})} type="text" className='form-control mt-2' placeholder='Enter the number of persons'  />
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    { selecteddestination?.length==0 &&
        selectedStage?.length==0 &&
        selectedFood?.length==0 ||
      <h2>
        {selecteddestination?.length>0?
         selecteddestination?.map((item)=>(<div className="row mt-5 mb-4">
         <div className="col-2"></div>
         <div className="col-lg-3 d-flex justify-content-center align-items-center">
           <Card style={{ width: '18rem',marginBottom:'10px' }}>
             <Card.Img variant="top" src={item.image} />
              <Card.Body>
              <div className='text-center'>
                  <Card.Title>{item.name}</Card.Title>
                  <h6><span className='text-secondary'>Seating capacity</span> : <span className='text-primary fw-bolder'>{item.seating}</span></h6>
                  <h6><i class="fa-solid fa-location-dot"></i> {item.location}</h6>
              </div>
             </Card.Body>
           </Card>
         </div>
         <div className="col-lg-5 d-flex justify-content-center align-items-center flex-column">
           <h4 className='text-danger'>{item.name}</h4>
           <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat. Ducimus temporibus officiis nemo asperiores quaerat reprehenderit qui eaque quod error, at ad dolorem corporis mollitia dicta illum alias quam?</h5>
            <div className='d-flex'>
              <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.price}</h4> <h6 className='mt-2'>/day</h6>
            </div>
           <Button onClick={()=>handleDelete(item._id)} className='btn btn-danger ms-auto mt-4'>Remove order <i class="fa-solid fa-trash"></i></Button>
         </div>
         <div className="col-2"></div>
       </div>))
       :<h6 className='text-info text-center mt-5'>Your destinaton empty... <Link to={'/mevent'}>Click to add</Link></h6>
          }

        {selectedStage?.length>0?
        selectedStage?.map((item)=>(<div className="row mt-5 mb-4">
        <div className="col-2"></div>
          <div className="col-lg-5 mt-5">
          <h4 className='text-danger d-flex justify-content-center'>{item.packageName}</h4>
            <h5>{item.discription}</h5>
            <div className='d-flex justify-content-center'>
              <h4 className='fw-bolder' style={{color:'gey'}}>₹:{item.price}</h4> <h6 className='mt-2'>/day</h6>
            </div>
            <Button onClick={()=>handleDelete1(item._id)} className='btn btn-danger mt-4'>Remove order <i class="fa-solid fa-trash"></i></Button>
          </div>
          <div className="col-lg-3 ms-5 ps-5 d-flex justify-content-center align-items-center">
            <Card style={{ width: '18rem',marginBottom:'10px' }}>
              <Card.Img variant="top" src={item.image} />
               <Card.Body>
               <div className='text-center'>
                   <Card.Title>{item.packageName}</Card.Title>
               </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-2"></div>   
        </div>))
        :<h6 className='text-warning text-center mt-5'>Your stage is empty... <Link to={'/mevent'}>Click to add</Link></h6>
          }

        <hr className='mt-5 ms-5 me-5' />
          <h3 className='mt-5 mb-4 text-info text-center'>Food You Ordered</h3>
        {selectedFood?.length>0?
         selectedFood?.map((item)=>(<div className="row mt-5 mb-4">
         <div className="col-2"></div>
         <div className="col-3">
           <Card style={{ width: '18rem',marginBottom:'10px' }}>
             <Card.Img variant="top" src={item.image} />
              <Card.Body>
              <div className='text-center'>
                  <Card.Title>{item.name}</Card.Title>
                  <h6>Amount :₹{item.price}</h6>
              </div>
             </Card.Body>
           </Card>
         </div>
         <div className="col-5 d-flex justify-content-center align-items-center flex-column">
           <h5>{item.description}</h5>
           <h6><span className='text-primary'>Number of food :</span> {numberOfPerson}</h6>
           <Button onClick={()=>handleDelete2(item._id)} className='btn btn-danger ms-auto mt-4'>Remove order <i class="fa-solid fa-trash"></i></Button>
         </div>
         <div className="col-2"></div>
       </div>))
       :<h6 className='text-info text-center mt-5'>Your food is empty... <Link to={'/mevent'}>Click to add</Link></h6>
          }

        
          <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-4 mt-4">
            <form className='form-control mb-5 shadow d-flex justify-content-center align-items-center flex-column'>
                <h3>Total ammount:₹ <span style={{color:'orange'}}>{calculateSum()}</span></h3>
                <Button onClick={handleShow} className='btn btn-primary mt-3 mb-3 fw-bold'>Edit Number Of Orders</Button>
                <p>or</p>
                <Link to={'/checkout'}><button className='btn btn-success mt-1 mb-3 fw-bold'>CheckOut</button></Link>
            </form>
            </div>
            <div className="col-4"></div>
        </div>
    </h2>}


    
      { selecteddestination?.length==0 &&
        selectedStage?.length==0 &&
        selectedFood?.length==0 &&
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
      <img src="https://cdn-icons-png.flaticon.com/512/11010/11010851.png" alt="no image" />
      <h3 className='text-danger pt-5 pb-3 mt3 fw-bolder'>Your cart is empty</h3>
      <div className='pb-5'><Link to={'/mevent'}><a className=' fw-bold'>Back To Collections </a></Link></div>
    </div>}

    <ToastContainer theme='colored' autoClose={2000} position='top-center'/>
    </>
  )
}

export default Cart