import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


function Footer() {

  const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
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
      email: state.email,
    };

    axios.post("/api/subscribe/", userData).then((response) => {
      console.log(response.status, response.data);

      alert("Form submitted successfully")
      navigate('/'); 
    });
  };

  return (
        
<footer className="text-center text-lg-start bg-white " style={{backgroundColor:'white'}}>
  <hr></hr>


  <section className="justify-content-center text-center ">
    <Container clasNames=" text-center text-md-start mt-5 bg-white" style={{backgroundColor:'white'}}>
      <Row className=" mt-3 bg-white">
        <Col style={{minWidth:'20em'}}className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 bg-white">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <Link style={{textDecoration:'none'}}as={Link} to="/newsletters">
          <p>
            <a className="fancy-link">Newsletters</a>
          </p>
          </Link>
          <Link style={{textDecoration:'none'}} as={Link} to="/Gallery">
          <p>
            <a className="fancy-link">Gallery</a>
          </p>
          </Link>
          <Link  style={{textDecoration:'none'}} as={Link} to="/Contact" >
          <p>
            <a className="fancy-link">Contact Us</a>
          </p>
          </Link>
          <Link  style={{textDecoration:'none'}} as={Link} to="/Donate">
          <p>
            <a  className="fancy-link">Support Us</a>
          </p>
          </Link>
        </Col>
        <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <div class="container p-4 pb-0">
        <Form action='' onSubmit={handleSubmit}>
          <Row className="row bg-white">
            <Col className="col-auto mb-4 mb-md-0 bg-white">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </Col>

            <Col className="col-md-auto col-12 mb-4 mb-md-0">
              <div className="form-outline mb-4">
              <Form.Control 
              type="email" 
              placeholder='Email' 
              name="email"
              value={state.email}
              onChange={handleChange}
              required
              style={{ borderRadius: '20px' }}
              />
              </div>
            </Col>
            <Col className="col-auto mb-4 mb-md-0">
              <Button type='submit' className="btn btn1 btn-primary mb-4" style={{ border:'none', borderRadius:'25px' ,backgroundColor: 'rgba(0, 39, 209, 0.7)'}}>
                Subscribe
              </Button>
            </Col>
          </Row>
      </Form>
      </div>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block bg-white">
      <span style={{fontSize:'14px'}}>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
  
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
 
    </div>
  </section>
  <div class="text-center p-4" style={{backgroundColor: 'white'}}>
   <p style={{ fontSize:'13px'}}> © 2021 RCCWE. &nbsp; All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer