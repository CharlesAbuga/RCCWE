import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button, Row, Col,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent, easeInOut } from 'framer-motion'
import { useState } from 'react';
import rccwe from "../static/rccwe.png"




function Header() {

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest>150) {
      setHidden(true)
    }
    else{
      setHidden(false)
    }
});

  const navariants={
    visible: {
      y:0
    },
    hidden:{
      y:-10
    },
  }

  return (
    <header style={{marginBottom:'100px', marginLeft:'10px', marginRight:'10px'}}>
      <motion.div 
      variants={navariants}
      transition={{duration: 0.35, ease: easeInOut, delay:.4}}
      animate={hidden? "hidden":"visible"}
      >
        <Navbar expand="lg" className="bg-body-success shadow-sm fixed-top mr-auto navbar-light nav navbar-expand-lg">
      <Container fluid>
            <img style={{width:'60px', height:'60px'}}src={rccwe}></img>
            <Navbar.Brand as={Link} to="/">RCCWE</Navbar.Brand>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <NavDropdown title="More" id="basic-nav-dropdown" className='fancy-link'><motion.div
                transition={{delay:0.5}}>

             <NavDropdown.Item className="navhov" as={Link} to="/Gallery"><i class="fa-solid fa-image"></i> &nbsp; Gallery</NavDropdown.Item>
              <NavDropdown.Item className="navhov" as={Link} to="/newsletters">
              <i class="fa-solid fa-newspaper"></i> &nbsp;
                Newsletters
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navhov"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Donate" className="navhov"> 
              <i class=" fa-sharp fa-solid fa-handshake"> &nbsp;</i>
                Support Us
              </NavDropdown.Item>
              </motion.div>
            </NavDropdown>
            <Nav.Link as={Link} to="/About" className='fancy-link'>About</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className='fancy-link'>Contact Us</Nav.Link>
            <Nav.Link> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
    </header>

  )
}

export default Header