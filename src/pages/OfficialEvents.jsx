import React from 'react'
import Card from 'react-bootstrap/Card';


function OfficialEvents() {
  return (
    <>
      <div className="row bg2-img">
        <h2 className='text-center text-light fw-bolder' style={{marginTop:'200px',marginBottom:'150px'}}><span style={{color:'green'}}>Make The</span> <span style={{color:'gray'}}>Event With Us</span></h2>
      </div>
      <div className="row">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 horizontal mt-5"><h2 className='text-center mt-3'>Destination Wedding</h2></div>
          <div className="col-2"></div>
        </div>
        <div className="col-6 d-flex justify-content-center flex-column">
            <p className='ms-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi minima accusantium debitis. Repudiandae blanditiis sit harum deleniti possimus, a doloremque inventore praesentium veniam dicta! Architecto totam impedit id minus unde!</p>
            <div className='d-flex'>
              <input className='form-control w-50 m-3' type="number" placeholder='Enter the number of Participence' name="" id="" />
              <button  className='btn btn-outline-warning mt-2 mb-3 ms-2'>Submit</button>
            </div>
          
        </div>
        <div className="col-6 mb-5">
          <img width={'500px'} height={'400px'} src="https://rainfocus.com/assets/pages/home-page/graphic-home-an-industry-leader.jpg" alt="no image" />
        </div>
      </div>
      {/* <div className="row">
        <h3 className='m-4'>Order youer food</h3>
        <div className='food-row'>
          <Card className='image-width'  style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           <button className='btn btn-success'>Add to cart</button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <h3 className='ms-4 mt-3'>Oredr light & soundes</h3>
        <div className='food-row'>
        <Card className='image-width'  style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://frankgattolighting.com/wp-content/uploads/2018/01/banner-1.jpeg" />
            <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           <button className='btn btn-success'>Add to cart</button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <h3 className='ms-4 mt-3'>Decaration works</h3>
        <div className='food-row'>
        <Card className='image-width'  style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://housing.com/news/wp-content/uploads/2023/10/shutterstock_2251978681.jpg" />
            <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           <button className='btn btn-success'>Add to cart</button>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </>
  )
}

export default OfficialEvents