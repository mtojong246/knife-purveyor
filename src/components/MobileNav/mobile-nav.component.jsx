import './mobile-nav.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileSideBar from '../MobileSideBar/mobile-side-bar.component';
import { useState } from 'react';

const MobileNav = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className='mobile-nav-container'>
                <div className='mobile-nav-menu' onClick={toggleMenu}>
                    <span>Menu</span>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
            {isMenuOpen && <MobileSideBar />}
        </>
    )
}

export default MobileNav;