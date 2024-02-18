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
        
<footer className="text-center text-lg-start bg-white ">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="justify-content-center text-center">
    <Container clasNames=" text-center text-md-start mt-5">
      <Row className=" mt-3">
        <Col style={{minWidth:'20em'}}className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
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
          <Row className="row">
            <Col className="col-auto mb-4 mb-md-0">
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
              />
              </div>
            </Col>
            <Col className="col-auto mb-4 mb-md-0">
              <Button type='submit' className="btn btn1 btn-primary mb-4">
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
  <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2021 Copyright:
  </div>
</footer>
  )
}

export default Footer