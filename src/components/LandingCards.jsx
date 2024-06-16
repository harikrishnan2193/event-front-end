import React from 'react'
import Card from 'react-bootstrap/Card';

function LandingCards() {
  const detilEvents = ()=>{
    alert('Please login')
  }
  return (
    <>
     <Card className='btn' onClick={detilEvents}>
      <Card.Img variant="top" src="https://rainfocus.com/assets/pages/home-page/graphic-home-simplify.png" />
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>Simplify Event Management</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default LandingCards