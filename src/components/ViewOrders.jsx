import React from 'react'
import { Link } from 'react-router-dom'

function ViewOrders() {
  return (
    <>
      <div className='d-flex justify-content-end me-5'>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/cart'}><button className='btn btn-outline-dark mt-3 mb-5 me-5 ms-1'><h6>View Orders <i class="fa-solid fa-arrow-right fa-beat-fade"></i></h6></button></Link>
      </div>
    </>
  )
}

export default ViewOrders