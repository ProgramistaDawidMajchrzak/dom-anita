import React from 'react';
import mainImg from '../images/main-img.jpg';
import '../App.css';

export default function Home() {
    return (
        <>
            <div className="main">
                <div className="text">
                    <h2><span>D</span>om Sp. z o.o.</h2>
                    <p>Specjalizujemy się w profesjonalnej obsłudze rynku nieruchomości. Głównym oraz podstawowym sektorem działalności naszej spółki jest Zarządzanie  Nieruchomościami. Powierzając nam swoją nieruchomość macie Państwo gwarancję profesjonalizmu i uczciwości w Państwa nieruchomości, co zwiększy dochody i wygeneruje najwięcej korzyści.</p>
                </div>
                <div className="img-box">
                    <img src={mainImg} alt="" />
                </div>
            </div>
        </>
    )
}
