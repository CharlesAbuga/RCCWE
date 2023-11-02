import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function Footer() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('/api/subscribe/', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
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
          <p>
            <a href="#"  className="fancy-link">Newsletters</a>
          </p>
          <p>
            <a href="#!" className="fancy-link">Gallery</a>
          </p>
          <p>
            <a href="#!" className="fancy-link">Contact Us</a>
          </p>
          <p>
            <a href="#!" className="fancy-link">Our Partners</a>
          </p>
        </Col>
        <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <div class="container p-4 pb-0">
        <form action="">
          <Row className="row">
            <Col className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </Col>

            <Col className="col-md-auto col-12 mb-4 mb-md-0">
              <div className="form-outline mb-4">
                <input type="email" id="form5Example25" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="form-control" />
              </div>
            </Col>
            <Col className="col-auto mb-4 mb-md-0">
              <button onClick={handleSubscribe} className="btn btn1 btn-primary mb-4">
                Subscribe
              </button>
              <p>{message}</p>
            </Col>
          </Row>
      </form>
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