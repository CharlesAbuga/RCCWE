import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion';
import mpesa from "../static/mpesa.png"

function Donate() {

const navigate = useNavigate();

  const [state, setState] = useState({
    phone_number: '',
    amount: '',
    email:'',
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
      phone_number: state.phone_number,
      amount: state.amount,
      email: state.email,
    };

    axios.post("/api/donate/", userData).then((response) => {
      console.log(response.status, response.data);

      alert("Form submitted successfully")
      navigate('/'); 
    });
  };


const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:50,

  },
  animate: () => ({
    opacity:1,
    y:0,
    transition:{
      duration: 1,
    }

  })
}

  return (
    <div >
    <motion.div style={{overflowX:'hidden'}}  variants={fadeInAnimationVariants} 
    initial="initial" 
    whileInView="animate" 
    viewport={{once:true}} 
    >  
    <Row style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row',textAlign:'center'}}>
      <br/>
      <br/>
      <h1><b> Please support us </b></h1>
      <p> Currently only <span style={{color:'green'}}><b>Mpesa</b></span> payments are available, please fill in the information below to send any amount you're capable of so as to support our cause</p>
      <img src={mpesa} style={{width:'200px', height:'146px'}}></img>
      <p>Fill the form below or send to <em>+254716052228</em></p>
    </Row>
    <br/>
    <Form style={{ width:'100%', margin:'0px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={handleSubmit}>
    <Row style={{borderRadius:'15px', boxShadow:' 1px 0px 5px #cccccc', padding:'15px'}}>
    <Col sm={12} md={6}>
    <Row>
      <Form.Group as={motion.div} variants={fadeInAnimationVariants} transition={{ duration: 1, delay: 1 }} className="text-center"> 
      <Form.Label> <b>Phone Number</b></Form.Label>  
      <Form.Control
        type='text'
        name='phone_number'
        value={state.phone_number}
        onChange={handleChange}
        placeholder='Phone number'
      />
      </Form.Group>  
      </Row> 
      <br/>
      </Col>
      <Col>
      <Row>
      <Form.Group as={motion.div} variants={fadeInAnimationVariants} transition={{ duration: 1, delay: 1.5 }} className="text-center"> 
      <Form.Label> <b>Amount</b></Form.Label>  
      <Form.Control
        type='number'
        name='amount'
        value={state.amount}
        onChange={handleChange}
        placeholder='Amount'
      />
      </Form.Group> 
      </Row>
      <br/>
    </Col>
    <Col sm={12} md={6}>
      <Row>
      <Form.Group as={motion.div} variants={fadeInAnimationVariants} transition={{ duration: 1, delay: 2 }} className="text-center"> 
      <Form.Label> <b> Email </b></Form.Label>  
      <Form.Control
        type='email'
        name='email'
        value={state.email}
        onChange={handleChange}
        placeholder='Email'
      />
      </Form.Group> 
      </Row>
      <br/>
    </Col>
    </Row>
    <br/>
    <Button className='donateButton' type='submit'>Donate</Button>
    </Form>

    </motion.div>
    </div>
  )
}

export default Donate