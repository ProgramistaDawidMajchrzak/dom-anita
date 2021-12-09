import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contact-img.jpg';
import { NavLink } from 'react-router-dom';

export default function Contact() {

    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isMessageValid, setIsMessageValid] = useState(false);
    const [rodo, setRodo] = useState(false);
    const [isRodoValid, setIsRodoValid] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                return (
                    setName(e.target.value),
                    setIsNameValid(false)
                )
            case 'email':
                return (
                    setEmail(e.target.value),
                    setIsEmailValid(false)
                )
            case 'message':
                return (
                    setMessage(e.target.value),
                    setIsMessageValid(false)
                )
            case 'rodo':
                return (
                    setRodo(!rodo),
                    setIsRodoValid(false)
                )
            default:
                return;
        };
    };

    const sendEmail = (e) => {
        emailjs.sendForm('service_vcdqxog', 'template_0b60o55', e.target, 'user_rJlig4QrDCQoBTMRscre6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Wiadomość wysłana');
    };

    const Validate = (e) => {
        e.preventDefault();
        if (name === '') {
            setIsNameValid(true)
        } else if (email === '' || !email.includes('@')) {
            setIsEmailValid(true)
        } else if (message === '') {
            setIsMessageValid(true)
        } else if (rodo === false) {
            setIsRodoValid(true)
        } else {
            sendEmail(e)
        }
    }

    return (
        <div className='contact'>
            <div className="text">
                <form onSubmit={Validate}>
                    <input
                        onChange={handleChange}
                        value={name}
                        className={`text-input ${isNameValid && 'input-valid'}`}
                        type="text"
                        name="name"
                        placeholder='Imię i nazwisko'
                    />

                    <input
                        onChange={handleChange}
                        value={email}
                        className={`text-input ${isEmailValid && 'input-valid'}`}
                        type="email"
                        name="email"
                        placeholder='Email'
                    />

                    <input
                        className='text-input'
                        type="phone"
                        name="phone"
                        placeholder='Telefon'
                    />

                    <textarea
                        onChange={handleChange}
                        value={message}
                        className={`text-input ${isMessageValid && 'input-valid'}`}
                        name="message"
                        placeholder='Wiadomość'
                    />

                    <div className="rodo-box">
                        <input
                            value={rodo}
                            name='rodo'
                            onChange={handleChange}
                            className={isRodoValid && 'checkbox-valid'}
                            type="checkbox" />
                        <p>Akceptuję</p>
                        <NavLink to='/rodo'>informacje dotyczące ochrony danych osobowych</NavLink>
                    </div>

                    <input
                        className='send-input'
                        type="submit"
                        value="Wyślij"
                    />
                </form>
            </div>
            <div className="img-box">
                <img src={contactImg} alt="" />
            </div>
        </div>
    )
}
