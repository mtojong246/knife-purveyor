import './newsletter-signup.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const NewsletterSignup = () => {
    return (
        <div className='newsletter-signup'>
            <span>Newsletter Signup</span>
            <form className='newsletter-signup-form'>
                <input type='email' id='email' placeholder='Email address' />
                <input type='text' id='first-name' placeholder='First name' />
                <input type='text' id='last-name' placeholder='Last name' />
            </form>
            <button className='newsletter-signup-button'>Sign Up</button>
            <div className='brand-icons'>
                <FontAwesomeIcon className='facebook' icon={faFacebook} />
                <FontAwesomeIcon className='instagram' icon={faInstagram} />
                <FontAwesomeIcon className='youtube' icon={faYoutube} />
            </div>
        </div>
    )
}

export default NewsletterSignup;