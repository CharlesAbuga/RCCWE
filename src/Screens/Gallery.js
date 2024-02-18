import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

function Gallery() {
  const [newsletters, setNewsletters] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchNewsLetters() {
      try {
        const { data } = await axios.get('/api/newsletters/');
        setNewsletters(data);
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
    }

    fetchNewsLetters();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const updateScroll = () => {
      container.scrollTop += 1; // Adjust the scrolling speed
    };

    const scrollInterval = setInterval(updateScroll, 50); // Update every 50 milliseconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div ref={containerRef} style={{ overflow: 'auto', maxHeight: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {newsletters.map((newsletter) => (
          <Col key={newsletter.id} style={{ marginBottom: '15px' }}>
            <img className="gallery-pic" src={newsletter.title_pic} alt={`Newsletter ${newsletter.id}`} />
          </Col>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
