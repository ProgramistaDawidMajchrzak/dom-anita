import React from 'react';
import mainImg from '../images/main-img.jpg';
import '../App.css';

export default function Home() {
    return (
        <>
            <div className="main">
                <div className="text">
                    <h2><span>L</span>orem ipsum</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Hic sint perferendis ea provident iure soluta animi voluptas perspiciatis.Ea, excepturi doloremque voluptatum harum iusto aspernatur iste amet nemo asperiores nam.</p>
                </div>
                <div className="img-box">
                    <img src={mainImg} alt="" />
                </div>
            </div>
        </>
    )
}
