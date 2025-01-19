import React, {useState, useEffect, useRef} from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import DarkVariantExample from '../components/DarkVariantExample'
import CardItem from '../components/CardItem'
import axios from 'axios'
import { motion, useScroll, useAnimation } from 'framer-motion'; // Import Framer Motion
import rccwe from '../static/rccwe.png'
import reform from '../static/reform.jpg'
import { useInView } from "react-intersection-observer";
import UNLogo from '../static/un-logo.png'

  

function HomeScreen() {
  const [newsletters, setNewsletters] = useState([])

  useEffect(() => {

      async function fetchNewsLetters(){
        const {data} = await axios.get('api/newsletters/')
        console.log(data);
        setNewsletters(data)
      }

      fetchNewsLetters()

  }, []);


  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
        initial: { x: "100vw" },
      });
    }
  }, [inView]);

  return (
    <div style={{ width:'100%', overflowX:'hidden', backgroundColor:'white'}}>
    <Col >
        <Row style={{padding:'40px'}}>
        
        <Col className='homeDiv'>
          <h3 style={{textAlign:'left', fontWeight:'bold'}}><span style={{color:'RoyalBlue'}}>Empowering</span> Communities, Transforming Lives Since 2004.</h3>
          <p>An organization founded in {} to better the lives of children and those in need for a prosperous future.
          Through initiatives in education, health, and public infrastructure, we empower communities to overcome poverty and create sustainable growth.
          </p>
            <p style={{textAlign:'left'}}>Learn more about us</p>
            <Button width='300' style={{width:'150px', borderRadius:'20px'}} className='btn btn-primary custom-btn '>About Us</Button>
        </Col>
        <Col style={{borderRadius:'10px', marginBottom:'30px'}}>
            <DarkVariantExample/>
          </Col>
        </Row>
    
        <Row>
          <h5 style={{textAlign:'center'}}>NewsLetters</h5>

          <h3 style={{textAlign:'center', fontWeight:'bold'}}> <span style={{color:'RoyalBlue', paddingBottom:'10px'}}>Support </span>Transformative Initiaves That Matter </h3>
        </Row>
        <Row  className="newsletter-row ">
        <div className="scroll-container" >
        {newsletters.map( newsletter => (
          <Col key={newsletter.id}>
            <CardItem newsletter={newsletter} />
          </Col>
          ))}
          </div>
        </Row>
        <br></br>
        <Row>
          <br>
          </br>
          <br/>

</Row>
          
        <Row style={{padding:'40px',}} className='homeDivHistory'>
          <Col sm={12} md={6} style={{display:'flex', flexDirection:'column',padding:'40px', marginBottom:'30px'}}>
          <div >
          <h4 style={{color: 'rgba(240, 242, 245, 0.7) ', textAlign:'left', fontWeight:'bold', paddingLeft:'18px'}}> Achievements</h4>
          </div>
            <Image className='shadow' style={{ minWidth:'15em', borderRadius:'25px', padding:'15px'}}src={reform}></Image>
          </Col>
          <Col className='homeDiv'>
          <i style={{textAlign:'left', color: 'white', fontSize:'40px'}} className="fa-solid fa-globe"> </i>
          <br></br>
         <span style={{ color:'White'}}>
            In 2007 we partnered with The UN in the campaign to reform international institutions through various processes such as
            piecemeal changes at systems to improve their functioning and enhance participation of all
            actors at the world scene, to deeper reforms which
            would path the way towards a truly democraticsystem of international institutions.
            </span>
            <br/>
     
            <span style={{fontSize:'13px'}}><i style={{color:'rgba(253, 254, 255, 0.7)'}}>"The possibilities for reform are without number and,
            although this paper does not explicitly develop on
            them, these possibilities include those that would
            worsen the current situation as regards the international institutions and the multilateral system."</i></span>
          </Col>
        </Row>
        <br></br>
        <Col className="homeDivSupport">
    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
      <span style={{ color: "RoyalBlue" }}>Our</span> Partners
    </h3>
    <p>
      Our partners are the backbone of our organization. They help us to achieve our mission of empowering
      communities and transforming lives. We are grateful for their support and dedication to our cause.
    </p>

    <Row className="containerSupport">
      <div className="marquee">
        <img src={UNLogo} alt="Partner 1" />
        
      </div>
    </Row>
  </Col>

   

       
    </Col>
    </div>
  )
}

export default HomeScreen