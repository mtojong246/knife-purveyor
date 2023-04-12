import "./checkout-item.styles.css"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { name, img, quantity, price } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={img} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}.00</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;