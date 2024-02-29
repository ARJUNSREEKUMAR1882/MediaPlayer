import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'white'}}>
          <i class="fa-solid fa-headphones  fa-bounce me-2" style={{fontSize:'30px'}}></i>{''}
            Media Player
          </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default Header
