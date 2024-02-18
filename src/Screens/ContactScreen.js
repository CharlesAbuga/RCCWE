import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {easeInOut, motion} from 'framer-motion'
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

  const svgVariants = {
    initial: {rotate: -180, x:-200},
    animate: {
      rotate: 0,
      x:0,
      delay:3,
      transition:{duration: 1.5,}
    }
  }
  const startVariants = {
    initial: { x:-200},
    animate: {
      x:0,
      transition:{duration: 1}
    }
  }
  const startVariants1 = {
    initial: { x:-200},
    animate: {
      x:0,
      transition:{duration: 1.2}
    }
  }
  const startVariants2 = {
    initial: { x:-200},
    animate: {
      x:0,
      transition:{duration: 1.4}
    }
  }

  const pathVariants = {
    initial: {opacity: 0, pathLength:0 ,x:0},
    animate: {
      opacity:1,
      pathLength:1,
      transition:{
        ease: "easeInOut",
      }
    }
  }
  return (
    <div>
    <h1 style={{textAlign:'center'}}><b>Contact Us</b></h1>
    <p style={{textAlign:'center'}}>Fill out the form below and a member from our team will reach out to you as soon as possible</p>
    <div style={{ display:'flex', padding:'10px', border:'1px solid black',  borderRadius:'10px', minWidth:'22em', justifyContent:'center', alignItems:'center', width:'80%', margin:'0 auto' }}>
    <Row style={{width:'100%', height:'100%'}}>
      <Col sm={12} md={6} lg={5}  style={{backgroundColor:'#454f5e', borderRadius:'10px'}} > 
      <div style={{alignItems:'center', display:'flex', justifyContent:'center', flexDirection:'row'}} >
        <motion.svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1024 1024" style={{ enableBackground: 'new 0 0 1024 1024', flexDirection:'row', textAlign:'center'}} xmlSpace="preserve"
          variants={svgVariants}
          initial="initial"
          animate="animate"
          width="200"  // Set your desired width
          height="200"
          >
        <style>{'.st0 { fill: #FFFFFF; }'}</style>
        <g>
          <motion.path className="st0" d="M480.985,560.668c-29.031,30.681-80.764,16.082-96.303-14.14c12.949-7.748,24.081-17.69,23.977-34.419
            c-0.084-16.52-8.688-28.049-23.684-34.607c0.898-1.754,1.88-3.425,2.945-5.033c0.71-1.086,1.441-2.13,2.214-3.133
            c0.752-1.002,1.566-1.984,2.402-2.945c0.835-0.94,1.692-1.859,2.59-2.757c1.963-1.963,4.073-3.739,6.287-5.347
            c1.086-0.814,2.214-1.566,3.383-2.297c3.885-2.402,8.083-4.344,12.49-5.723c6.621-2.089,13.701-2.945,20.948-2.423h0.021
            c3.07,8.876,6.14,17.774,9.294,26.963c-5.952,4.052-12.072,7.581-17.419,12.009c-18.317,15.205-18.86,37.051,1.023,50.23
            C446.356,547.134,464.36,553.003,480.985,560.668z" variants={pathVariants}/>
          <motion.path className="st0" d="M577.371,588.654c-1.483,21.846-10.547,39.536-29.469,51.671c-22.87-32.456-52.151-32.498-69.674-0.94
            c-18.358-7.268-30.535-28.216-30.368-52.757c9.043-3.112,18.275-6.287,27.444-9.44c4.302,6.266,7.811,12.448,12.343,17.773
            c14.223,16.75,35.359,18.129,47.995,0.313c10.965-15.476,17.356-34.231,25.585-51.19
            C570.208,549.703,578.687,569.419,577.371,588.654z" variants={pathVariants}/>
          <motion.path className="st0" d="M576.515,437.568c-9.482,3.258-18.045,6.224-27.548,9.503c-3.613-5.388-7.101-11.424-11.383-16.792
            c-15.058-18.964-38.012-19.591-51.19,0.647c-9.733,14.933-15.33,32.581-22.703,48.893c-22.535-11.55-27.527-71.157,12.949-96.408
            c7.247,14.474,18.024,24.812,35.171,24.854c16.729,0.021,27.423-9.921,34.733-23.977
            C566.03,395.818,575.199,412.213,576.515,437.568z" variants={pathVariants}/>
          <motion.path className="st0" d="M640.989,546.069c-13.033,20.886-31.245,29.866-54.595,31.057c-3.028-9.461-5.89-18.421-8.96-28.007
            c5.493-3.947,11.466-7.561,16.688-12.072c19.152-16.479,19.486-36.821-1.587-50.877c-14.808-9.879-32.581-15.267-48.371-22.368
            c20.844-27.945,77.59-20.593,95.927,13.722c-14.035,6.913-24.394,17.648-24.269,34.002
            C615.926,527.773,624.03,540.054,640.989,546.069z" variants={pathVariants}/>
          <motion.path className="st0" d="M540.028,371.863c0.125,15.351-12.218,27.569-27.778,27.527c-15.664-0.042-27.673-12.134-27.485-27.673
            c0.188-15.455,12.719-27.465,28.237-27.047C527.872,345.087,539.923,357.201,540.028,371.863z" variants={pathVariants}/>
          <motion.path className="st0" d="M399.907,512.526c-0.313,15.058-12.155,26.942-26.984,27.109c-15.163,0.146-27.715-12.448-27.694-27.799
            c0.021-15.601,12.218-27.673,27.778-27.548C388.441,484.435,400.241,496.821,399.907,512.526z" variants={pathVariants}/>
          <motion.path className="st0" d="M679.418,511.796c0.063,15.184-12.657,27.966-27.694,27.819c-15.414-0.146-27.026-12.406-26.817-28.279
            c0.209-15.915,12.093-27.423,27.882-27.026C667.597,484.686,679.355,496.821,679.418,511.796z" variants={pathVariants}/>
          <motion.path className="st0" d="M540.028,652.271c-0.292,14.495-12.719,26.65-27.443,26.838c-15.372,0.167-27.84-12.155-27.82-27.527
            c0.021-15.727,11.863-27.193,27.903-27.026C528.436,624.723,540.341,636.795,540.028,652.271z" variants={pathVariants}/>
        </g>
        </motion.svg>
        </div>
        <div style={{paddingLeft:'20px', color:'white'}}>
        <p style={{color:'white', fontSize:'11px'}}>Unity to be real must stand the severest  strain without breaking.  <br/><em>– Mahatma Gandhi</em></p>
        <h5 style={{marginBottom:'18px'}}>Contact Details</h5>
        <Row>
          <Col>
        <motion.p variants={startVariants} initial='initial' animate='animate' style={{fontSize:'12px', alignItems:'center',textAlign:'left', display:'flex'}}> <div  style={{ border:' 1.5px solid white', 
        borderRadius:'5px',
        padding:'5px', 
        alignItems:'center',
        textAlign:'left', 
        display:'flex', flex:'column'}} > <ion-icon style={{fontSize:'17px'}} name="call"></ion-icon> </div> &nbsp; +25416052228</motion.p>
        </Col>
        <Col>
        <motion.p variants={startVariants1} initial='initial' animate='animate'style={{ fontSize:'12px',alignItems:'center',textAlign:'left', display:'flex'}}> <div  style={{ border:' 1.5px solid white', 
        borderRadius:'5px',
        padding:'5px', 
        alignItems:'center',
        textAlign:'left', 
        display:'flex', flex:'column'}} > <ion-icon style={{fontSize:'17px'}} name="mail"></ion-icon> </div> &nbsp;  mmoronge@gmail.com</motion.p>
        </Col>
        <motion.p variants={startVariants2} initial='initial' animate='animate' style={{ fontSize:'12px',alignItems:'center',textAlign:'left', display:'flex'}}> <div  style={{ border:' 1.5px solid white', 
        borderRadius:'5px',
        padding:'5px', 
        alignItems:'center',
        textAlign:'left', 
        display:'flex', flex:'column'}} > <ion-icon style={{fontSize:'17px'}} name="pin"></ion-icon> </div> &nbsp; Ruai,Kenya</motion.p>
        </Row>
        </div>
      </Col>
      
      <Col sm={12} md={6} lg={6}>
      <Row>
      <Form onSubmit={handleSubmit} style={{padding:'15px'}}>
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
  </div>
  )
}

export default ContactScreen