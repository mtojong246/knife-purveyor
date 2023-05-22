import "./checkout-item.styles.css"
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selectors";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart-actions";

const CheckoutItem = ({ cartItem }) => {
    const { name, img, quantity, price } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={img} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}.00</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;