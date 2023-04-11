import './customer-service.styles.css';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'

const CustomerService = () => {
    return (
        <div className='customer-service'>
            <span className='customer-title'>Customer Service</span>
            <div className='customer-links'>
                <p>About KnifePurveyor and Michael A Donato</p>
                <p>Testimonials</p>
                <NavLink className='customer-link' to='/sign-in'><p>Log In / Register</p></NavLink>
                <NavLink className='customer-link' to='/contact'><p>Contact Us</p></NavLink>
                <p>Company Policies</p>
                <p>Privacy Policy</p>
                <Link activeClass="active" to="published" spy={true} smooth={true} offset={-150} duration={1000} delay={100}><p>Published In</p></Link>
                <p>Links</p>
            </div>
            <span>Hours of Operation</span>
            <div className='hours'>
                <p>M-F 10:00am-5:00pm ET</p>
            </div>
        </div>
    )
}

export default CustomerService;