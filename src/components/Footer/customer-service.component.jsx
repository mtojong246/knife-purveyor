import './customer-service.styles.css';

const CustomerService = () => {
    return (
        <div className='customer-service'>
            <span className='customer-title'>Customer Service</span>
            <div className='customer-links'>
                <p>About KnifePurveyor and Michael A Donato</p>
                <p>Testimonials</p>
                <p>Log In / Register</p>
                <p>Contact Us</p>
                <p>Company Policies</p>
                <p>Privacy Policy</p>
                <p>Published In</p>
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