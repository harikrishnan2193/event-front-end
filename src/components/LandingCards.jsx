import React from 'react'

function LandingCards() {

  return (
    <>
      <div className="row mb-5 mt-5">
        <div className="col-2"></div>
        <div className="col-lg-5 col-sm-12  d-flex justify-content-center align-items-center flex-column">
          <h6 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae omnis consequuntur molestias libero? Praesentium at iusto ullam libero eum vel incidunt sit rerum sequi asperiores. Consequuntur dolor mollitia assumenda.</h6>
          <p className='text-info mt-3'>Hybrid conference, Users conference, Fully event booking, Hybrid conference</p>
        </div>
        <div className="col-lg-4 col-sm-12  d-flex justify-content-center align-items-center">
          <img src="https://rainfocus.com/assets/pages/home-page/graphic-home-simplify.png" alt="No image" width={'80%'} style={{ borderRadius: '25px 0' }} />
        </div>
      </div>
    </>
  )
}

export default LandingCards