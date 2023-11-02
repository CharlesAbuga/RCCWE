import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Donate() {

const navigate = useNavigate();

  const [state, setState] = useState({
    phone_number: '',
    amount: '',
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
    };

    axios.post("/api/donate/", userData).then((response) => {
      console.log(response.status, response.data);

      alert("Form submitted successfully")
      navigate('/'); 
    });
  };



  return (
    <>  
    <Form style={{ width:'70%', margin:'20px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={handleSubmit}>
    <Col>
    <Row>
      <Form.Group> 
      <Form.Label> Phone Number</Form.Label>  
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
      <Row>
      <Form.Group> 
      <Form.Label> Amount</Form.Label>  
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
      <br/>
      <Button type='submit'>Donate</Button>
    </Col>
    </Form>

    </>
  )
}

export default Donate