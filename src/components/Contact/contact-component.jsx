import './contact-styles.css';
import { useEffect } from 'react';
import Map from '../Map/map.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            <div className='map-container'>
                <Map />
                <div className='contact-info'>
                    <div className={`${window.innerWidth > 480 ? '' : 'address'}`}><p><FontAwesomeIcon className='contact-icon' icon={faLocationDot} />100 Siena Office Park Rd, Wake Forest, NC, 27587</p></div>
                    <div><FontAwesomeIcon className='contact-icon' icon={faPhone} /><p>919-295-1283</p></div>
                    <div><FontAwesomeIcon className='contact-icon' icon={faEnvelope} /><p>info@knifepurveyor.com</p></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;



//<div className='contact-info'>
//                <h2>Office Hours</h2>
//                <p>Monday through Friday</p>
//                <p>10:00AM - 5:00PM</p>
//                <h2>Office</h2>
//                <p>919-295-1283</p>
//                <h2>Emails are always welcome.</h2>
//                <p>info@knifepurveyor.com</p>
//            </div>