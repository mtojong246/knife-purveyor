import './scroll-to-top.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import {  animateScroll as scroll } from 'react-scroll'

const ScrollToTop = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='scroll-container' onClick={scrollToTop}>
            <FontAwesomeIcon className='scroll-to-top' icon={faChevronCircleUp} />
        </div>

    )
}

export default ScrollToTop;