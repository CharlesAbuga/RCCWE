import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Image, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import rccwe from '../static/rccwe.png'

function NewLetter() {
    const { id } = useParams();
    const [newsletter, setNewsletter] = useState([])
    useEffect(() => {
  
        async function fetchNewsLetters(){
          const {data} = await axios.get(`/api/newsletter/${id}`)


          setNewsletter(data)
        }
  
        fetchNewsLetters()
  
    })


  return (
    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', paddingLeft:'2em', paddingRight:'2em'}}>
     <Row style={{display:'flex', justifyContent:'center', textAlign:'center', marginBottom:'10px'}}>
            <h1><b>{newsletter.title}</b></h1>
        </Row>
        <Row style={{justifyContent:'center', textAlign:'center'}}>
            <p>Added on:{newsletter.date_added}</p>
      </Row>
    <Row style={{gap:'20px'}}>  
      <Col sm={12} md={6} lg={7} className="shadow" style={{ minWidth:'20em', padding:'0px', borderRadius:'15px'}} >
            <div  style={{width:'100%' , height:'30em'}}>
            <Image className='newsletterImg' src={newsletter.title_pic}></Image>
            </div>
        <Row  style={{paddingLeft:'10px', paddingRight:'10px'}}>
            <p>{newsletter.description}</p>
        </Row>
      </Col>
      <Col  style={{display:'flex', justifyContent:'center', alignItems:'center'}}sm={12} md={6} lg={4} className=" d-none d-md-block">
        <div className='shadow supportDiv' style={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',padding:'15px' , height:'58vh',borderRadius:'15px'}}>
        <Image className='newsletterImg-left' src={rccwe}></Image>
        <p >To support us please click the button below</p>
        <Button style={{textAlign:'center'}}>Support Us</Button>
        </div>
      </Col>
    </Row>
    </div>
  )
}

export default NewLetter
