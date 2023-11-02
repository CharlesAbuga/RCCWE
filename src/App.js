import {useState, useEffect} from 'react'
import Load from './components/Load'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './Screens/HomeScreen'
import ContactScreen from './Screens/ContactScreen'
import AboutScreen from './Screens/AboutScreen'
import NewsLetter from './Screens/NewsLetter'
import NewLetter from './Screens/NewLetter'
import Gallery from './Screens/Gallery'
import Donate from './Screens/Donate'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., data fetching)
    setTimeout(() => {
      setLoading(false); // Set loading to false when done loading
    }, 2000);
  }, []);
  return (
    <div className='App' style={{margin:'0px'}} >
    <Router>
      <Header />
        <main>
          <>
              <Routes>
                <Route path='/' element={loading ? <Load /> : <HomeScreen/>}  />
                <Route path='/About' element={loading ? <Load /> : <AboutScreen/>} />
                <Route path='/Contact' element={loading ? <Load /> : <ContactScreen/>} />
                <Route path='/Newsletters' element={loading ? <Load /> : <NewsLetter/>} />
                <Route path='/Newsletter/:id' element={loading ? <Load /> : <NewLetter/>} />
                <Route path='/Gallery' element={loading ? <Load /> : <Gallery/>} />
                <Route path='/Donate' element={loading ? <Load /> : <Donate/>} />
              </Routes>
          </>
        </main>
      <Footer />
  </Router>  
    </div>
  );
}


export default App;
