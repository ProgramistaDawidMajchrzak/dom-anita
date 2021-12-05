import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link as NavLink, Routes, Route } from 'react-router-dom';
import logo from './images/logo.png';


import Offer from './components/Offer';
import News from './components/News';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="nav">
            <NavLink className='normal-button' to='/offer'>Oferta</NavLink>
            <NavLink className='normal-button' to='/news'>Aktualności</NavLink>
            <NavLink className='contact-button' to='/contact'>Kontakt</NavLink>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <div className="footer">

      </div>
    </>
  );
}

export default App;
