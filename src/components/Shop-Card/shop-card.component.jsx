import './shop-card.styles.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart-actions';
import { selectCartItems } from '../../store/cart/cart-selectors';

const ShopCard = ({ product }) => {
    const { img, name, price } = product; 
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const newName = name.toLowerCase().replace(/\s+/g, '-') 

    return (
        <div className='shop-card-container'>
            <Link to={`/shop/knives/${newName}`}>
                <div className='shop-card-image'>
                    <img src={img} alt='shop-knife' />
                </div>
            </Link>
            <div className='shop-card-description'>
                <div className='shop-card-title'>
                    <span>{name}</span>
                </div> 
                <p>${price}.00</p>
            </div>
            <button type='button' onClick={() => dispatch(addItemToCart(cartItems, product))}>Add to cart</button>
        </div>
    )
}

export default ShopCard;