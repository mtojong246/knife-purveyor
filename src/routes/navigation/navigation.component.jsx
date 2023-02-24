import './navigation.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { Fragment, useState, useContext } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import { Link, animateScroll as scroll } from 'react-scroll'

import CartDropdown from '../../components/Cart-Dropdown/cart-dropdown.component';
import ShopDropdown from '../../components/Shop-Dropdown/shop-dropdown.component';
import Footer from '../../components/Footer/footer.component';
import CartIcon from '../../components/Cart-Icon/cart-icon.component';
import SearchBar from '../SearchBar/search-bar.component';
import ScrollToTop from '../../components/Scroll-To-Top/scroll-to-top.component';


const Navigation = () => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { isCartOpen } = useContext(CartContext);

    const navigate = useNavigate();

    const goToContact = () => {
        navigate('./contact');
    }

    const goToSignIn = () => {
        navigate('./sign-in')
    }

    const toggleIsShopOpen = () => setIsShopOpen(!isShopOpen);
    const toggleIsSearchOpen = () => setIsSearchOpen(!isSearchOpen);

    

    return (
        <Fragment>
            <div className='navigation-container'>
                <NavLink to='/' className='navigation-logo'>
                    <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/Logo-TM-520.png'} alt='logo' />
                </NavLink>
                <ul className='navigation-links'>
                    <li className='shop-nav'>
                        <span onClick={toggleIsShopOpen}>Shop<FontAwesomeIcon className='up-caret' icon={faCaretDown}/></span>
                        {isShopOpen && <ShopDropdown />}
                    </li>
                    <li><span>Appraisal</span></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={1000} delay={100}><span>About</span></Link></li>
                    <li><span onClick={goToContact}>Contact</span></li>        
                    <li><span>Sell</span></li>
                </ul>
                <div className='navigation-icons'>
                    <div className='search-bar-trigger'>
                        <span onClick={toggleIsSearchOpen}><FontAwesomeIcon className='search' icon={faMagnifyingGlass}/></span>
                        {isSearchOpen && <SearchBar />}
                    </div>
                    <span onClick={goToSignIn}><FontAwesomeIcon icon={faUser}/></span>
                    <div className='cart-dropdown-trigger'>
                        <CartIcon/>
                        {isCartOpen && <CartDropdown />}
                    </div>   
                </div>   
            </div>
            <ScrollToTop />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation;