import React from 'react';
import './App.css';

import logo from './images/logo.png'
import mainImg from './images/main-img.jpg'

function App() {
  return (
    <>
      <div className="container">

        <div className="header">
          <img src={logo} alt="logo" />
          <button>KONTAKT</button>
        </div>


        <div className="main">
          <div className="text">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint perferendis ea provident iure soluta animi voluptas perspiciatis. Ea, excepturi doloremque voluptatum harum iusto aspernatur iste amet nemo asperiores nam.</p>
          </div>
          <div className="img-box">
            <img src={mainImg} alt="" />
          </div>
        </div>
        <div className="section-animations">
          <h2>Zakres usług</h2>
          <div className="line"></div>
          <div className="animation-container">
            <div className="animation-box">
              
            </div>
            <div className="animation-box"></div>
            <div className="animation-box"></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
