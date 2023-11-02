import React, {useState, useEffect} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import CardItem from '../components/CardItem'

function NewsLetter() {
    const [newsletters, setNewsletters] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
  
        async function fetchNewsLetters(){
          const {data} = await axios.get('/api/newsletters/')
          setNewsletters(data)
        }
  
        fetchNewsLetters()
  
    }, [])

    const handleSearch = async () => {
      try {
        const { data } = await axios.get(`/api/search-newsletters/?query=${searchQuery}`);
        setNewsletters(data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'15px'}}>
    <Form style={{marginBottom:'15px'}}className="d-flex center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button onClick={handleSearch}>Search</Button>
    </Form>
    </div>
    <hr/>
    <Row>
    {newsletters.map( newsletter => (
        <Col>
            <CardItem newsletter={newsletter} />
        </Col>
    ))}
    </Row>

    </>
  )
}

export default NewsLetter