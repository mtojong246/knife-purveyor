import './mobile-side-bar.styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import MobileShop from '../MobileShop/mobile-shop.component';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user-selectors';

const MobileSideBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const [ isMobileShopOpen, setIsMobileShopOpen ] = useState(false);


    const toggleMobileShop = () => setIsMobileShopOpen(!isMobileShopOpen);

    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate('./sign-in')
    }

    const goToAppraisal = () => {
        navigate('./appraisal');
    }

    const goToContact = () => {
        navigate('./contact');
    }

    return (
        <>
            <div className='mobile-side-bar-container'>
                <div className='mobile-side-bar'>
                    <span onClick={toggleMobileShop}>Shop <FontAwesomeIcon icon={isMobileShopOpen ? faCaretUp : faCaretDown} className='mobile-caret' /></span>
                    <span onClick={goToAppraisal}>Appraisal</span>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={1000} delay={100}><span>About</span></Link>
                    <span onClick={goToContact}>Contact</span>
                    {currentUser ? (
                        <span onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <span onClick={goToSignIn}>Sign In</span>
                    )}
                </div>
            </div>
            {isMobileShopOpen && <MobileShop />}
        </>
    )
}

export default MobileSideBar;