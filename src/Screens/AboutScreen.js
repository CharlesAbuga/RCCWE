import React, { useEffect, useState, useRef } from 'react'
import { Card, Button, Row, Col, Image} from 'react-bootstrap'
import { motion, useScroll, useAnimation, useInView } from 'framer-motion';
import rccwe from '../static/rccwe.png'
import pic3 from "../static/pic3.jpg"
import womanProfile from "../static/pexels-cristian-rojas-10041258.jpg"
import manProfile from "../static/pexels-linkedin-2182970.jpg"
import backgroundAbout from "../static/pexels-illustrate-digital-ug-924569584-28101466.jpg"
import { ReactComponent as MyIcon } from '../static/rccwe.svg';


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
    <Row
  style={{
    overflowX: 'hidden',
    position: 'relative', // Ensures that the gradient div is positioned within this container
    backgroundImage: `url(${backgroundAbout})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    borderRadius:'25px',
  }}
>
  <Col className='aboutDiv' id='sec1' style={{zIndex:1,  display: 'flex', // Add flexbox
    flexDirection: 'column', // Align items in a column
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    height: '100vh',}}>
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: '2', ease: 'easeInOut' }}
      style={{ width: '15em' }}
    >

<MyIcon style={{  paddingLeft:'50', textAlign:'center', width: '200px', height: '200px' ,color:'white' }} />
    </motion.div>
    <h2 style={{ marginBottom: '80px', color: 'white', textAlign: 'center' }}>
      {typedText}
    </h2>
    <a href="#sec2">
      <Button
        style={{
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          background: 'linear-gradient(45deg, rgba(4, 205, 245, 0.7), rgba(6, 44, 211, 0.9))',
        }}
      >
        Get to know Us
      </Button>
    </a>
  </Col>

  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(2, 9, 71, 0.8), rgba(2, 9, 71, 0.2))', // Fading gradient
      pointerEvents: 'none', // Prevents interference with other elements
      zIndex: 0, // Ensure this stays behind the content
    }}
  />
</Row>
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden'}} id="sec2">
      <Col sm={12} md={6}  className="px-2 px-md-5 py-3"  style={{textAlign:'left', justifyContent:'center', alignItems:'left'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        style={{ width: '100%' }}
         >
          <h4 style={{marginBottom:'20px', textAlign:'left',  fontWeight:'bold' }}>About Us</h4>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
       <p style={{fontSize:'30px', textAlign:'left'}}><i  class="fa-solid fa-angle-double-right"></i></p>
        <p style={{textAlign:'justify'}}>The Regional Centre for Community Welfare and Extension is Non-Government Organizations (NGO) registered by
           The Non-Governmental Organizations Co-ordination Board to run its operations in Kenya. The organization
            has been operational since 2004.</p>
        </motion.div>
      </Col>
      <br/>
      <br/>
      <br/>
      
      <a href="#sec3" >
      <motion.div style={{textAlign:'center', marginTop:'80px'}} animate={{y:[0,10,0]}} transition={{repeat:100000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'40px'}} className="fa-solid fa-circle-down"> </i>
      </motion.div>
      </a>
    </Row>

    <Row id="sec3" style={{textAlign:'center', minHeight:'80vh', paddingTop:'50px', background: 'linear-gradient(135deg, rgba(2, 28, 143, 0.9), rgba(0, 212, 255, 0.7))', borderRadius:'25px', color:'white'}}>
      <h4 style={{fontWeight:'bold'}}> Our Team</h4>
      <Col sm={12} md={6} style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
      <div >
    
     
        <Image variant="top" height='400px' style={{objectFit:'cover', borderRadius:'25px'}} src={manProfile} alt='no image' />
    
     
        <p style= {{fontSize:'16px', paddingTop:'10px', fontWeight:'bold'}}>Dr Makori Moronge</p>
        <p style= {{fontSize:'12px'}}>Chief Executive Officer</p>
        
       
   
    </div>
      </Col>
      <Col sm={12} md={6} style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
      <div >
    
     
        <Image variant="top" height='400px' style={{objectFit:'cover',  borderRadius:'25px'}} src={womanProfile} alt='no image' />
  
     
            <p style= {{fontSize:'16px', paddingTop:'10px', fontWeight:'bold'}}></p>
            <p style= {{fontSize:'12px'}}>Chief Executive Officer</p>
        
       
   
    </div>
      </Col>
      <a href="#sec4">
      <motion.div style={{textAlign:'center'}} animate={{y:[0,10,0]}} transition={{repeat:1000000, duration:1.5, ease:'easeInOut'}}>
      <i style={{textAlign:'center', fontSize:'40px'}} className="fa-solid fa-circle-down"> </i>
      </motion.div>
      </a>
    </Row> 
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden'}} id="sec4">
      <Col sm={12} md={6} className="px-2 px-md-5 py-3"  style={{textAlign:'left', justifyContent:'center', alignItems:'left'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
         >
           <h4 style={{marginBottom:'20px', textAlign:'left',  fontWeight:'bold' }}>Our Vision</h4>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
          <p style={{fontSize:'30px', textAlign:'left'}}><i  class="fa-solid fa-bullseye"></i></p>
        <p style={{textAlign:'justify'}}>To support the development of strong communities to help improve the quality of life, 
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
      <i style={{textAlign:'center', fontSize:'40px'}} className="fa-solid fa-circle-down"> </i>
      </motion.div>
      </a>
    </Row>
    <Row style={{ minHeight:'100vh', paddingTop:'40px', paddingBottom:'130px',overflowX: 'hidden', background: 'linear-gradient(45deg,  rgba(0, 212, 255, 0.7), rgba(2, 28, 143, 0.9))', borderRadius:'25px', color:'white'}} id="sec5">
      <Col sm={12} md={6} className="px-2 px-md-5 py-3" style={{textAlign:'left', justifyContent:'center', alignItems:'left'}}>
         <motion.div 
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
         >
          <h4 style={{marginBottom:'20px', textAlign:'left',  fontWeight:'bold' }}>Our Mission</h4>
          <img style={{maxWidth: '100%', height: 'auto', maxHeight:'20em', objectFit:'cover', borderRadius:'15px',}}src={pic3}></img>
         </motion.div>
      </Col>
      <Col sm={12} md={6} style={{ paddingTop:'0px', display:'flex', textAlign:'center' ,justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <motion.div 
         variants={fadeInAnimationVariants2}
         initial="initial"
         whileInView="animate"
        >
            <p style={{fontSize:'30px', color:'white', textAlign:'left'}}><i class="fa-solid fa-chart-line"></i></p>
        <p style={{textAlign:'justify'}}>To improve the livelihoods of marginalized communities through revitalizing and improving public infrastructure, 
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
      <i style={{textAlign:'center', fontSize:'40px'}} className="fa-solid fa-circle-up"></i>
      </motion.div>
      </a>
    </Row>
    </Col>
    </>
  )
}

export default AboutScreen