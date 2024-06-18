import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Events() {
  return (
    <>
    <Header event/>
      <div className="row bg-imag">
        <h2 className='text-center text-light' style={{marginTop:'200px',marginBottom:'150px'}}>We Are <span style={{color:'red'}}>Experience Makers</span></h2>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center text-primary mt-5 horizontal"><h2 className='mt-5 '>YOU HAVE A STORY THAT NEEDS TO BE TOLD</h2></div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-6 mb-5">
          <img height={'470px'}  src="https://aguiamweddingphotography.com/wp-content/uploads/2024/04/aguiamweddingphotography-5.jpg" alt="no image" />
        </div>
        <div className="col-5 d-flex align-items-center">
          <div>
            <h3 className='text-warning'>Destination wedding & Engagement</h3> <br />
            <h6 style={{lineHeight:'1.8'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eligendi animi excepturi quaerat! Consequuntur sint dolores asperiores minus ut dicta dolor vero ducimus, blanditiis, nemo voluptatibus quaerat obcaecati molestiae rem?</h6>
            <Link style={{textDecoration:'none',color:'white'}} to={'/mevent'}><button className='btn btn-warning mb-1 mt-2'>Make youer event</button></Link>
          </div>
          
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 d-flex align-items-center">
        <div>
            <h3 className='text-secondary'>Conferences</h3> <br />
            <h6 style={{lineHeight:'1.8'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eligendi animi excepturi quaerat! Consequuntur sint dolores asperiores minus ut dicta dolor vero ducimus, blanditiis, nemo voluptatibus quaerat obcaecati molestiae rem?</h6>
            <Link style={{textDecoration:'none',color:'black'}} to={''}><button className='btn btn-secondary mb-1 mt-2'>Make youer event</button></Link>
          </div>
        </div>
        <div className="col-6 mt-3">
          <img className='ms-4 mb-5' height={'360px'} width={'550px'} src="https://media.licdn.com/dms/image/C4D12AQF7W9Ls_-70Dw/article-cover_image-shrink_720_1280/0/1560351360607?e=2147483647&v=beta&t=aZDBo1tgJgRA_JbEqqnJ-O_G_6R08rlKzyCicPymsic" alt="no image" />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-6 mb-5">
          <img height={'470px'}  src="https://images.pexels.com/photos/4915535/pexels-photo-4915535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no image" />
        </div>
        <div className="col-5 d-flex align-items-center">
          <div>
            <h3 className='text-danger'>Home Events</h3> <br />
            <h6 style={{lineHeight:'1.8'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eligendi animi excepturi quaerat! Consequuntur sint dolores asperiores minus ut dicta dolor vero ducimus, blanditiis, nemo voluptatibus quaerat obcaecati molestiae rem?</h6>
            <Link style={{textDecoration:'none',color:'white'}} to={''}><button className='btn btn-danger mb-1 mt-2'>Make youer event</button></Link>
          </div>
          
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row mb-3">
        <div className="col-1"></div>
        <div className="col-5 d-flex align-items-center">
        <div>
            <h3 className='text-info'>Stage Shows</h3> <br />
            <h6 style={{lineHeight:'1.8'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eligendi animi excepturi quaerat! Consequuntur sint dolores asperiores minus ut dicta dolor vero ducimus, blanditiis, nemo voluptatibus quaerat obcaecati molestiae rem?</h6>
            <Link style={{textDecoration:'none',color:'white'}} to={''}><button className='btn btn-info mb-1 mt-2'>Make youer event</button></Link>
          </div>
        </div>
        <div className="col-6 mt-3">
          <img className='ms-4 mb-5' height={'360px'} width={'550px'} src="https://mig.cc/wp-content/uploads/2020/04/award-shows.jpg" alt="no image" />
        </div>
      </div>
    </>
  )
}

export default Events