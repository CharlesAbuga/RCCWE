import React from 'react'
import {Carousel, Container, Button} from 'react-bootstrap';
import pic1 from "../static/pic1.jpg"
import pic2 from "../static/pic2.jpg"
import pic3 from "../static/pic3.jpg"
function DarkVariantExample() {
  return (
    
    <Carousel indicatorLabels={false} indicators={true} controls={false} data-bs-theme="light" className='carousel-fade w-20'style={{minHeight:'25rem',minWidth:'16rem', width:'100%', margin:'0px', borderRadius:'35px'}}>
      <Carousel.Item className="divCont">
        <div className='divpic'></div>
        <img
          className="d-block w-100 pic"
          src={pic1}
          alt="First"
        />
        <Carousel.Caption>
          <Container className='carcont'>
          <h5 ></h5>
          <p></p>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="divCont">
      <div className='divpic'></div>
        <img
          className="d-block w-100 pic"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Container className='carcont'>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="divCont">
      <div className='divpic'></div>
        <img
          className="d-block w-100 pic"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption >
          <Container className='carcont'>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DarkVariantExample