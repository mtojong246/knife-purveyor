import './cart-dropdown.styles.css';
import { useNavigate } from 'react-router-dom';
import CheckoutItemDropdown from '../Checkout-Item-Dropdown/checkout-item-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selectors';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('./checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-dropdown-content-container'>
                <div className='cart-dropdown-content'>
                    {cartItems.length ? cartItems.map(cartItem => (
                        <CheckoutItemDropdown key={cartItem.id} cartItem={cartItem}/>
                    )) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )}
                </div>
            </div>
            <div className='cart-dropdown-button'>
                <button type='button' onClick={goToCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartDropdown; 