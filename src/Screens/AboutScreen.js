import React, { useEffect, useState, useRef } from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { motion, useScroll, useAnimation, useInView } from 'framer-motion';
import rccwe from '../static/rccwe.png'
import pic3 from "../static/pic3.jpg"


function AboutScreen() {
  const [typedText, setTypedText] = useState('');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})

  const mainControls = useAnimation();

  useEffect(() =>{
    if (isInView){
      mainControls.start('visible')

    }

  }, [isInView])
  

  useEffect(() => {
    const textToType = "The Regional Centre for Community Welfare and Extension (RCCWE)";
    const delayBetweenTyping = 60; // Adjust the typing speed here
    const typingDuration = textToType.length * delayBetweenTyping;

    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        controls.start({ opacity: 1 });
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, delayBetweenTyping);

    controls.start({
      opacity: 1,
      transition: { duration: typingDuration / 1000, ease: "easeOut" },
    });

    return () => {
      clearInterval(typingInterval);
    };
  }, [controls]);


  const fadeInAnimationVariants = {

    initial:{
      x:100, 
      opacity:0
    },
    animate:{
      opacity:1, 
      x:[-100, 0],
      transition:{
        duration:1.5,
        delay:.3,
      }
    }

  }
  const fadeInAnimationVariants2 = {

    initial:{
      y:100, 
      opacity:0
    },
    animate:{
      opacity:1, 
      y:[-100, 0],
      transition:{
        duration:1.5,
        delay:.3,
      }
    }

  }


  
  return (
    <>
    <Col style={{scrollBehavior:'smooth', paddingLeft:'20px', paddingRight:'20px'}}>
    <Row style={{overflowX: 'hidden'}}>
      <Col className='aboutDiv' id='sec1'>
      <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 180 }} transition={{duration:'2', ease:'easeInOut'}}style={{width:'15em'}}> 
      <img style={{ maxWidth: '100%', height: 'auto'}}src={rccwe}></img>
      </motion.div> 
      <h2 style={{marginBottom:'80px', textAlign:'center'}}>{typedText}</h2>
      <a href="#sec2"><Button>Get to know Us</Button></a>
      </Col>
    </Row>
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden'}} id="sec2">
      <Col sm={12} md={6} style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
         >
          <h2 style={{marginBottom:'20px'}}>About Us</h2>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
        <p>The Regional Centre for Community Welfare and Extension is Non-Government Organizations (NGO) registered by
           The Non-Governmental Organizations Co-ordination Board to run its operations in Kenya. The organization
            has been operational since 2004.</p>
        </motion.div>
      </Col>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="#sec3" >
      <motion.div style={{textAlign:'center', marginTop:'80px'}} animate={{y:[0,10,0]}} transition={{repeat:100000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'20px'}} className="fa-solid fa-arrow-down"> Our Team</i>
      </motion.div>
      </a>
    </Row>

    <Row id="sec3" style={{textAlign:'center', minHeight:'100vh', paddingTop:'50px'}}>
      <h2> Our Team</h2>
      <Col>
      <div className='container1'>
      <Card className='c1'>
        <div class="imgBox">
        <Card.Img variant="top" src={rccwe} alt='no image' className="img1"/>
        </div>
        <Card.Body className="b1" >
            <Card.Title>Dr Makori, CEO</Card.Title>
            <Card.Text>
             </Card.Text>
        </Card.Body>
    </Card>
    </div>
      </Col>
      <Col>
      <div className='container1'>
      <Card className='c1'>
        <div class="imgBox">
        <Card.Img variant="top" src={rccwe} alt='no image' className="img1"/>
        </div>
        <Card.Body className="b1" >
            <Card.Title>Dr Makori, CEO</Card.Title>
            <Card.Text>
             </Card.Text>
        </Card.Body>
    </Card>
    </div>
      </Col>
      <a href="#sec4">
      <motion.div style={{textAlign:'center'}} animate={{y:[0,10,0]}} transition={{repeat:1000000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'20px'}} className="fa-solid fa-arrow-down"> Our Vision</i>
      </motion.div>
      </a>
    </Row> 
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden'}} id="sec4">
      <Col sm={12} md={6} style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
         >
          <h2 style={{marginBottom:'20px'}}>Our Vision</h2>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
        <p>To support the development of strong communities to help improve the quality of life, 
          The Regional Center for community welfare and extension appreciates that rural communities, 
          are capable of growth, development and change, and these communities can be enhanced by increasing the individual, 
          organizational, and problem-solving knowledge and skills of their members.</p>
        </motion.div>
      </Col>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="#sec5" >
      <motion.div style={{textAlign:'center', marginTop:'80px'}} animate={{y:[0,10,0]}} transition={{repeat:100000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'20px'}} className="fa-solid fa-arrow-down"> Our Mission</i>
      </motion.div>
      </a>
    </Row>
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden'}} id="sec5">
      <Col sm={12} md={6} style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
         >
          <h2 style={{marginBottom:'20px'}}>Our Mission</h2>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
        <p>To improve the livelihoods of marginalized communities through revitalizing and improving public infrastructure, 
          education and health and wellness to improve the quality of life. We strengthen communities’ capacity to eradicate poverty. 
          Our focus areas are communities in Kwale (Msabweni), Kajiado, Makueni, Migori, Kisii, Nyamira, Suba and Nairobi Slums.</p>
        </motion.div>
      </Col>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="#sec1" >
      <motion.div style={{textAlign:'center', marginTop:'80px'}} animate={{y:[0,10,0]}} transition={{repeat:100000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'20px'}} className="fa-solid fa-arrow-up"> Top</i>
      </motion.div>
      </a>
    </Row>
    </Col>
    </>
  )
}

export default AboutScreen