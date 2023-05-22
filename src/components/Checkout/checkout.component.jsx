import './checkout.styles.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selectors';
import CheckoutItem from '../Checkout-Item/checkout-item.component';
import PaymentForm from '../Payment-Form/payment-form.component';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <>
            <div className='checkout-container'>
                <span className='checkout-title'>Cart</span>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span className='desc'>Description</span>
                    </div>
                    <div className='header-block'>
                        <span className='quant'>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span className='pri'>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: ${cartTotal}</span>
                <PaymentForm />
            </div>
            <div to='/shop' className='return-button'>
                <Link to='/shop'><button type='button'>Return to Shop</button></Link>
            </div>
        </>
    )
}

export default Checkout;