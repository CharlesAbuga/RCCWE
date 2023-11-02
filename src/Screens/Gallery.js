import React, {useState, useEffect} from 'react'
import axios from 'axios'
import{Col, Row} from 'react-bootstrap'

function Gallery() {
    const [newsletters, setNewsletters] = useState([])
    useEffect(() => {
  
        async function fetchNewsLetters(){
          const {data} = await axios.get('/api/newsletters/')
          setNewsletters(data)
        }
  
        fetchNewsLetters()
  
    }, [])
  return (
    <div >
    <Row>   
    {newsletters.map( newsletter => (
        <Col key={newsletter.id}>
        <img className="gallery-pic" src={newsletter.title_pic}></img>
        </Col>
    ))}
    </Row> 
    </div>
  )
}

export default Gallery