import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contact-img.jpg';
import { NavLink } from 'react-router-dom';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rodo, setRodo] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                return setName(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'message':
                return setMessage(e.target.value);
            default:
                return;
        };
    };

    const handleChangeCheckbox = () => {
        setRodo(!rodo)
    }

    const Validate = (e) => {
        e.preventDefault();
        if (name === '') {
            // console.log(e.target.name.className)
        } else if (email === '' || !email.includes('@')) {
            console.log('email error')
        } else if (message === '') {
            console.log('message error')
        } else if (rodo === false) {
            console.log('rodo error')
        } else {
            console.log('wysłano')
        }
    }

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

    return (
        <div className='contact'>
            <div className="text">
                <form onSubmit={Validate}>
                    <input
                        onChange={handleChange}
                        value={name[0]}
                        className='text-input'
                        type="text"
                        name="name"
                        placeholder='Imię i nazwisko'
                    />

                    <input
                        onChange={handleChange}
                        value={email}
                        className='text-input'
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
                        className='text-input'
                        name="message"
                        placeholder='Wiadomość'
                    />

                    <div className="rodo-box">
                        <input
                            value={rodo}
                            onChange={handleChangeCheckbox}
                            className='checkbox'
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
