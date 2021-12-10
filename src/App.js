import React from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import logo from './images/logo.png';

import Offer from './components/Offer';
import News from './components/News';
import Home from './components/Home';
import Contact from './components/Contact';
import Rodo from './components/Rodo';
import Abc from './components/Abc';

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="header">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className='nav'>
            <NavLink className='normal-button' to='/offer'>Oferta</NavLink>
            <NavLink className='normal-button' to='/news'>Aktualności</NavLink>
            <NavLink className='normal-button' to='/new-site' target="_blank">Strefa klienta</NavLink>
            <NavLink className='contact-button' to='/contact'>Kontakt</NavLink>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/rodo' element={<Rodo />} />
            <Route path='/new-site' element={<Abc />} />
          </Routes>
        </div>
      </HashRouter>
      <div className="footer">

      </div>
    </>
  );
}

export default App;
