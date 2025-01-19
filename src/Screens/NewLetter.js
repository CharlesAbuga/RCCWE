import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Image, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import rccwe from '../static/rccwe.png'

function NewLetter() {
    const { id } = useParams();
    const [newsletter, setNewsletter] = useState([])
     const [newsletters, setNewsletters] = useState([])

    useEffect(() => {
  
        async function fetchNewsLetters(){
          const {data} = await axios.get(`/api/newsletter/${id}`)


          setNewsletter(data)
        }
  
        fetchNewsLetters()
  
    }, [id])

    useEffect(() => {
  
      async function fetchNewsLetters(){
        const {data} = await axios.get('/api/newsletters/')
        setNewsletters(data)
      }

      fetchNewsLetters()

  }, [])


  return (
    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:'2em 5em 2em 5em',}}>
  
       
    <Row style={{gap:'20px', }}>  
    {/* sm={12} md={6} lg={7}*/} 
      <Col   style={{ minWidth:'20em', padding:'0px', borderRadius:'15px', flex:'4'}} >
    
            <div  style={{width:'100%' , height:'25em'}}>
              
            <Image className='newsletterImg' src={newsletter.title_pic}></Image>
            </div>
           
            <row
  style={{
    display: 'flex',             // Ensure it's a flex container
    justifyContent: 'flex-end',  // Align items to the right
    alignItems: 'center',        // Vertically align items in the center
    fontSize: '10px',            // Adjust font size
    textAlign: 'left',           // Align text to the left
    paddingTop: '10px',
  }}
>
  {/* New Object (e.g., a chip or some other element) */}

        <i style={{textAlign:'center', fontSize:'18px', paddingRight:'10px'}} className="fa-solid fa-calendar-days"> </i>

 

  

  {/* Date */}
  <span style={{ fontSize: '14px', color: 'grey', textAlign: 'right' }}>
    {new Date(newsletter.date_added).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </span>
</row>
            <Row style={{display:'flex', justifyContent:'center',  textAlign:'left', marginBottom:'10px'}}>
            <h4 ><b>{newsletter.title}</b></h4>
        </Row>
    
      <p style={{fontSize:'14px'}}>{newsletter.description}</p>
      
      </Col>
      <Col   xs="12" 
  sm="12" 
  md="auto" 
  lg="auto"  className="d-none d-md-block" style={{paddingLeft:'10px', gap:'2opx', minWidth:'20em',  flex:'1'}}>
      <div className='supportDiv' style={{ display:'flex',  justifyContent:'flex-start', flexDirection:'column',padding:'15px' , height:'40vh',borderRadius:'15px'}}>
        <h6 style={{fontWeight:'bold'}}>More Newsletters</h6>
       
        {newsletters .filter((relatedNewsletter) => relatedNewsletter.id !== parseInt(id)).map((newsletter) => (
          <Link className='relatedListRow'  style={{ color:'RoyalBlue' ,textDecoration: 'none', }} to={`/newsletter/${newsletter.id}`}>
  <row
    key={newsletter.id}
    style={{
      display: 'flex',             // Ensure it's a flex container
      justifyContent: 'flex-start',  // Align items to the right
      alignItems: 'center',        // Vertically align items in the center
      fontSize: '10px',            // Adjust font size
      textAlign: 'left',           // Align text to the left
      paddingTop: '10px',
      
    
    }}
  >
    <Col >
    <Image  width='100px' height='100%' style={{borderRadius:'10px', objectFit:'cover'}} src={newsletter.title_pic }/> 
    </Col>
    <Col>

    <h1
      style={{
        fontSize:'14px',
        fontWeight: 'bold',  // Make the text bold
        display: 'inline',  // Make sure the text stays on the same row as the image
        margin: 0,  // Optional: to remove any margin the <p> tag might have by default
      }}
    >
    
        
     {newsletter.title}
       
   
      
     
    </h1>

    <p className='newsLetterText' style ={{  fontSize: '14px',color: 'grey',  paddingBottom:'10px',  wordWrap: 'break-word',  whiteSpace: 'normal',   margin: '0',  }}>
                {newsletter.description.substring(0, 50)}...
             </p>
    
    </Col>
  </row>
  </Link>
))}
        </div>
        
        </Col>

      {/* <Col  style={{display:'flex', justifyContent:'center', alignItems:'center'}}sm={12} md={6} lg={4} className=" d-none d-md-block">
        <div className='shadow supportDiv' style={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',padding:'15px' , height:'58vh',borderRadius:'15px'}}>
        <Image className='newsletterImg-left' src={rccwe}></Image>
        <p >To support us please click the button below</p>
        <Button style={{textAlign:'center'}}>Support Us</Button>
        </div>
      </Col> */}
    </Row>

    </div>
  )
}

export default NewLetter
