import './cart-icon.styles.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart-selectors';
import { setIsCartOpen } from '../../store/cart/cart-actions';

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartHandler = () => {
        if (window.innerWidth <= 480) {
            navigate('./checkout')
        } else {
            toggleIsCartOpen();
        }
    }

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={cartHandler}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{cartCount}</span>
        </div>
    )
}

export default CartIcon;