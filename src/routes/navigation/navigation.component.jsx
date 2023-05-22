import './navigation.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { Fragment, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'

import CartDropdown from '../../components/Cart-Dropdown/cart-dropdown.component';
import ShopDropdown from '../../components/Shop-Dropdown/shop-dropdown.component';
import SignInDropdown from '../../components/SignInDropdown/signin-dropdown.component';
import Footer from '../../components/Footer/footer.component';
import CartIcon from '../../components/Cart-Icon/cart-icon.component';
import SearchBar from '../SearchBar/search-bar.component';
import ScrollToTop from '../../components/Scroll-To-Top/scroll-to-top.component';
import MobileNav from '../../components/MobileNav/mobile-nav.component';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsShopOpen, selectIsCartOpen } from '../../store/cart/cart-selectors';
import { setIsShopOpen } from '../../store/cart/cart-actions';


const Navigation = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [ isSignInOpen, setIsSignInOpen ] = useState(false);
    const isCartOpen = useSelector(selectIsCartOpen);
    const isShopOpen = useSelector(selectIsShopOpen);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const goToAppraisal = () => {
        navigate('./appraisal');
    }

    const goToContact = () => {
        navigate('./contact');
    }

    const toggleIsShopOpen = () => dispatch(setIsShopOpen(!isShopOpen));
    const toggleIsSearchOpen = () => setIsSearchOpen(!isSearchOpen);
    const toggleIsSignInOpen = () => setIsSignInOpen(!isSignInOpen);

    const signInHandler = () => {
        if (window.innerWidth <= 780) {
            navigate('./sign-in')
        } else {
            toggleIsSignInOpen()
        }
    }

    return (
        <Fragment>
            <div className='navigation-container'>
                <NavLink to='/' className='navigation-logo'>
                    <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/Logo-TM-520.png'} alt='logo' />
                </NavLink>
                <ul className='navigation-links'>
                    <li className='shop-nav'>
                        <span onClick={toggleIsShopOpen}>Shop<FontAwesomeIcon className='caret' icon={isShopOpen ? faCaretUp : faCaretDown} /></span>
                        {isShopOpen && <ShopDropdown />}
                    </li>
                    <li><span onClick={goToAppraisal}>Appraisal</span></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={1000} delay={100}><span>About</span></Link></li>
                    <li><span onClick={goToContact}>Contact</span></li>        
                </ul>
                <div className='navigation-icons'>
                    <div className='search-bar-trigger'>
                        <span onClick={toggleIsSearchOpen}><FontAwesomeIcon className='search' icon={faMagnifyingGlass}/></span>
                        {isSearchOpen && <SearchBar />}
                    </div>
                    <div className='sign-in-trigger'>
                        <span onClick={signInHandler}><FontAwesomeIcon icon={faUser}/></span>
                        {isSignInOpen && <SignInDropdown />}
                    </div>
                    <div className='cart-dropdown-trigger'>
                        <CartIcon/>
                        {isCartOpen && <CartDropdown />}
                    </div>   
                </div>   
            </div>
            <ScrollToTop />
            <MobileNav />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation;