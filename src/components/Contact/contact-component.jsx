import './contact-styles.css';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='contact-container'>
            <div className='contact-input'>
                <span>Contact Us</span>
                <form className='contact-form'>
                    <input type='text' id='contact-first-name' placeholder='First name' />
                    <input type='text' id='contact-last-name' placeholder='Last name' />
                    <input type='email' id='contact-email' placeholder='Email address' />
                    <input type='text' id='contact-number' placeholder='Phone number' />
                </form>
                <button className='contact-submit'>Submit</button>
            </div>
            <div className='contact-info'>
                <h2>Office Hours</h2>
                <p>Monday through Friday</p>
                <p>10:00AM - 5:00PM</p>
                <h2>Office</h2>
                <p>919-295-1283</p>
                <h2>Emails are always welcome.</h2>
                <p>info@knifepurveyor.com</p>
            </div>
        </div>
    )
}

export default Contact;