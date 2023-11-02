import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function CardItem({newsletter}) {

  
  return (
    <div className='container1'>
    <Card className='c1'>
        <div class="imgBox">
        <Card.Img variant="top" src={newsletter.title_pic} alt='no image' className="img1"></Card.Img>
        </div>
        <Card.Body className="b1" >
            <Card.Title>{newsletter.title}</Card.Title>
            <Card.Text>
                {newsletter.description}
             </Card.Text>
             <Link to={`/newsletter/${newsletter.id}`} >
            <motion.div whileHover={{ paddingLeft:'80px', paddingRight:'80px'}} style={{ paddingLeft:'90px',paddingRight:'90px' ,flexDirection:'row', alignItems:'center' , justifyContent:'center'}}>
            <Button  className="btn btn-primary hover" style={{ width:'100%', height:'100%', backgroundColor:'transparent', color:'black'}} variant="primary">View More</Button>
            </motion.div>  
            </Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default CardItem