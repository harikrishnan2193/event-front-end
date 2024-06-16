import React, { useEffect, useState } from 'react'
import './Landing.css'
import Lnd from './Lnd'
import Header from '../components/Header'

function Landing() {

  
  return (
    <>
    <Header/>
      <div className='scrol'>
        <Lnd/>
      </div>
    </>
  )
}

export default Landing