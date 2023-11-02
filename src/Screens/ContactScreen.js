import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {motion} from 'framer-motion'
import support from '../static/support.jpg'

function ContactScreen() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      phone: state.phone,
      subject: state.subject,
      message: state.message,
    };

    axios.post("/api/contact/", userData).then((response) => {
      console.log(response.status, response.data);

      alert("Form submitted successfully")
      navigate('/'); 
    });
  };
  return (
    
    <div style={{ display:'flex', paddingTop:'10px',  borderRadius:'15px', minWidth:'22em', justifyContent:'center', alignItems:'center', width:'60%', margin:'0 auto' }}>
    <Row style={{width:'100%', height:'100%'}}>
      <Col>
      <div style={{ backgroundImage: `url(${support})`, backgroundSize: 'cover', height:'15em' , display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', borderRadius:'15px', }}>
      <h1 style={{textAlign:'center', margin:'30px'}}> Contact us:</h1>
      </div>
      <Row style={{gap:'10px', padding:'15px'}} >
      <p style={{fontSize:'10px'}}>Scroll left to reveal infomation</p>
        <div className='scroll-container-contact'>  
        <Col className=''sm={12} md={6} style={{ minWidth: '15em', minHeight:'10em', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center',padding:'15px', borderRadius:'10px', border:'1px solid black', textAlign:'center'}}>
        <ion-icon style={{}}name="mail"></ion-icon>
        <p>mmoronge@gmail.com</p>
        </Col>
        <Col sm={12} md={6} style={{minWidth: '15em', minHeight:'10em', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center', padding:'15px', borderRadius:'10px', border:'1px solid black', textAlign:'center'}}> 
        <ion-icon name="call"></ion-icon>
        <p>+254721370204</p>
        </Col>
        <Col sm={12} md={6} style={{minWidth: '15em', minHeight:'10em', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center', padding:'15px', borderRadius:'10px', border:'1px solid black', textAlign:'center'}}>
        <ion-icon name="pin"></ion-icon>
        </Col>
        </div>
      </Row>
      <hr/>
      <Row>
      <motion.p animate={{y:[0,-10,0] }} style={{textAlign:'center'}}> Kindly fill the form below to contact us</motion.p>
      <Form onSubmit={handleSubmit} style={{border:'1px solid black', padding:'15px', borderRadius:'15px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>First Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="First Name" 
        name="first_name"
        value={state.first_name}
        onChange={handleChange}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1-1">
      <Form.Label>Last Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Last Name" 
        name="last_name"
        value={state.last_name}
        onChange={handleChange}
        required
        />
      </Form.Group>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label><ion-icon name="mail"></ion-icon></Form.Label>
        <Form.Control 
        type="email" 
        placeholder='Email' 
        name="email"
        value={state.email}
        onChange={handleChange}
        required
        />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label><ion-icon name="call"></ion-icon></Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Phone" 
        name="phone"
        value={state.phone}
        onChange={handleChange}
        required
        />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control 
        type="text" 
        placeholder="Subject"
        name="subject"
        value={state.subject}
        onChange={handleChange}
        required 
        
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" 
        placeholder='Write your message'rows={3} 
        name="message"
        value={state.message}
        onChange={handleChange}
        required
        />
      </Form.Group>
      <Button type="submit" className="mb-2"  >
       Submit
      </Button>
    </Form>
    </Row>
      </Col>
      </Row>
  </div>
  )
}

export default ContactScreen