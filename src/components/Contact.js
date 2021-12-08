import React from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contact-img.jpg';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vcdqxog', 'template_0b60o55', e.target, 'user_rJlig4QrDCQoBTMRscre6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Wiadomość wysłana')
    }

    return (
        <div className='contact'>
            <div className="text">
                <form onSubmit={sendEmail}>
                    <input className='text-input' type="text" name="name" placeholder='Imię i nazwisko' />

                    <input className='text-input' type="email" name="email" placeholder='Email' />

                    <input className='text-input' type="phone" name="phone" placeholder='Telefon' />

                    <textarea className='text-input' name="message" placeholder='Wiadomość' />

                    <div className="rodo-box">
                        <input className='checkbox' type="checkbox" />
                        <p>Akceptuje warunki rodo</p>
                    </div>

                    <input className='send-input' type="submit" value="Wyślij" />
                </form>
            </div>
            <div className="img-box">
                <img src={contactImg} alt="" />
            </div>
        </div>
    )
}
