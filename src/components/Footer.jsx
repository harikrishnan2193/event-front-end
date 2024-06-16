import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='row' style={{backgroundColor:'#071e31'}}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4 mt-5 mb-5">
              <form  action="" className='border shadow rounded text-white' style={{backgroundColor:'#071e40'}}>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <h3 className='mt-4 ' style={{overflowY:'hidden'}}>Get All About Our Team!</h3>
                  <h6 className='mt-3'>Subscribe for free</h6>
                </div>
                <div className='d-flex m-4'>
                <input type="text" className='form-control text-white' placeholder='Enter your email id'/>
                <button className='btn btn-primary ms-4 align-items-center justify-content-center d-flex p-3'>Subscribe</button>
                </div>
                <p className='d-flex justify-content-center align-items-center mt-5 mb-4 pt-2' style={{fontSize:'10px'}}>We respect your privacy.</p>
              </form>
            </div>
            <div className="col-4">
              <form action="">
                <div className="row mt-5 ms-3">
                  <div className="col-4">
                  <iframe width="100%"  src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="col-4">
                  <iframe width="100%" src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="col-4">
                  <iframe width="100%" src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="row mb-5 ms-3">
                  <div className="col-4">
                  <iframe width="100%" src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="col-4">
                  <iframe width="100%" src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="col-4">
                  <iframe width="100%" src="https://www.youtube.com/embed/LgMbITJUdM0?si=IPkRjwb7xGb4ErLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="row text-white" style={{backgroundColor:'#071e31'}}>
          <div className="col-2"></div>
          <div className="col-3">
          <h4 className='fw-bolder'>E-vent focus</h4>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ab inventore consequatur temporibus pariatur facere maiores debitis aperiam culpa quam qui odio, dolorum cumque doloribus quas aliquam, quia laboriosam rerum?</p>
          </div>
          <div className="col-1 links d-flex flex-column">
            <h4 className='fw-bolder'>Links</h4>
            <hr />
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>About</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Events</Link>
          </div>
          <div className="col-2 guides d-flex flex-column">
          <h4>Guids</h4>
            <hr />
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
          </div>
          <div className="col-2 d-flex flex-column">
            <h4>Contact As</h4><hr />
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-envelope"></i>&nbsp;eventsfocus@gmail.com</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone">&nbsp;&nbsp;</i>9365242121</Link>
            <h6 className='mt-4'>Also On</h6>
            <hr />
            <div className='d-flex justify-content-evenly align-items-center mt-2 mb-2'>
              <Link  to={'/'} style={{textDecoration:'none',color:'white'}}><i style={{overflow:'hidden'}} class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i style={{overflow:'hidden'}} class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i style={{overflow:'hidden'}} class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i style={{overflow:'hidden'}} class="fa-brands fa-facebook fa-2x"></i></Link>
            </div>

          </div>
        </div>
        <div className="row" style={{backgroundColor:'#071e31'}}>
          <div className="col-2"></div>
          <div className="col-8 text-white">
            
            <div className='mt-5'>
              <p className='mb-5'>Event focus is a registered 501C3. Our EIN is 813653443. Find us on GuideStar.</p>
              <hr />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='mt-3'>copyright @ 2024 event focus pvt ltd</p>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </>
  )
}

export default Footer