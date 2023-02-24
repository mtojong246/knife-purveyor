import './footer.styles.css';
import NewsletterSignup from '../NewsletterSignup/newsletter-signup.component';
import CustomerService from './customer-service.component';
import ShopFooter from './shop-footer.component';

const Footer = () => {
    return (
        <div className='footer-container'>
            <NewsletterSignup />
            <CustomerService />
            <ShopFooter />
        </div>
    )
}

export default Footer;