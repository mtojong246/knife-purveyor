import './cart-icon.styles.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const navigate = useNavigate();

    const cartHandler = () => {
        if (window.innerWidth <= 480) {
            navigate('./checkout')
        } else {
            toggleIsCartOpen();
        }
    }

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={cartHandler}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{cartCount}</span>
        </div>
    )
}

export default CartIcon;