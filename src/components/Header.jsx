import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isTokenContext } from '../context/ContextShare';


function Header({login,event,mevent}) {
  const {isToken,setIsToken} = useContext(isTokenContext)

  const navigate = useNavigate()

  const handleLougout = ()=>{
    sessionStorage.removeItem("numberOfOrder")
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("phoneNumber")
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("numberOfPersons")

    navigate('/')
    setIsToken(false)
  }

  return (
    <>
        {login?
        <div style={{backgroundColor:'white',position:'relative'}}>
        <Navbar expand="lg" className="bg-body-white">
      <Container>
        <img style={{width:'45px'}} src="https://static.vecteezy.com/system/resources/previews/002/378/022/non_2x/woman-face-logo-free-vector.jpg" alt="No image" />
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'#071e31'}} to={'/'}>Event Focus</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
:
        <div style={{backgroundColor:'white',position:'relative'}}>
            <Navbar expand="lg" className="bg-body-white">
          <Container>
            <img style={{width:'45px'}} src="https://static.vecteezy.com/system/resources/previews/002/378/022/non_2x/woman-face-logo-free-vector.jpg" alt="No image" />
            <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'#071e31'}} to={'/'}>Event Focus</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="ms-auto"> 
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
                <Nav.Link href="#link">Programs</Nav.Link>
                
                <div>
                  { mevent ?
                  <button onClick={handleLougout} className='btn btn-outline-dark ms-2 mb-1 mt-1 me-1 rounded-pill '>LogOut</button>:
                  
                  <div>
                    {event ?
                      <button onClick={handleLougout} className='btn btn-outline-dark ms-2 mb-1 mt-1 me-1 rounded-pill '>LogOut</button> :
                      <Link to={'/login'}><button className='btn btn-outline-dark ms-2 mb-1 mt-1 me-1 rounded-pill '>Login</button></Link>
                    }
                  </div>
  }
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        
      }
      
    </>
  )
}

export default Header