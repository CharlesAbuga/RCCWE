import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function CardItem({newsletter}) {

  
  return (
    <div className='container1'>
    <Card className='newsLetterCard' >
 
        <Card.Img  src={newsletter.title_pic} alt='no image' className="img1"></Card.Img>
         
        <Card.Body className="card-body" style={{ width: '23em', paddingTop:'15px', paddingLeft:'0',  paddingRight:'0'}} >
            <p className='newsLetterTitle' >{newsletter.title}</p>
            <p className='newsLetterText' style ={{  fontSize: '14px',color: 'grey',  paddingBottom:'10px',  wordWrap: 'break-word',  whiteSpace: 'normal',   margin: '0',  }}>
                {newsletter.description.substring(0, 50)}...
             </p>
             <Link to={`/newsletter/${newsletter.id}`} >
            <motion.div whileHover={{ paddingLeft:'0px', paddingRight:'0px'}} style={{ paddingTop:'10',width:'150px' ,paddingLeft:'0px',paddingRight:'0px' ,flexDirection:'row', alignItems:'center' , justifyContent:'center'}}>
            <Button  className="btn btn-primary hover " style={{ fontSize:'14px', width:'100%', height:'100%', backgroundColor:'transparent', color:'black'}} variant="primary">View More</Button>
            </motion.div>  
            </Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default CardItem