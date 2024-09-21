import React from 'react'
import LandingCards from '../components/LandingCards'


function Lnd() {

  return (
    <>
      <div style={{ backgroundColor: 'white', marginTop: '350px', position: 'relative' }}>
        <div className='d-flex justify-content-center align-items-center text-black mt-5 pt-3'>
          <h3 className='horizontal' style={{ overflow: 'hidden' }}><h4 style={{ overflow: 'hidden' }} className='mt-5'>Elevate Events to Drive Demand and Accelerate Growth</h4></h3>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <p className='text-center'>Multi Image Group (MIG) is an event production and communications company specializing in strategic ideation and collaboration, live events and exhibits, multimedia and technology engagements, and all of the end-to-end capabilities you need to bring your brand story to life in ways that move hearts (create emotional connections), move minds (change perceptions), and move the needle (drive desired outcomes).</p>
          </div>
          <div className="col-1"></div>

          <div className='d-flex justify-content-center align-items-center text-black mt-5 mb-2 flex-column'>
            <h4 className='text-center'>One platform simplifies, unifies, and optimizes every in-person, virtual, and hybrid event.</h4>
            <button className='btn btn-outline-dark mt-5 mb-2'>Request a demo</button>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 horizontal mt-5">  </div>
            <div className="col-1"></div>
          </div>

        </div>
        <div className="row mt-2">
          <h2 className='text-center mb-4 text-primary'>Bring Your Vision and Strategy to Life With Our Platform</h2>
          <LandingCards />
        </div>
      </div>
    </>
  )
}

export default Lnd