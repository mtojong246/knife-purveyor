import './shop-card.styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ShopCard = ({ product }) => {
    const { img, name, price } = product; 
    const { addItemToCart } = useContext(CartContext);

    return (
        <div className='shop-card-container'>
            <div className='shop-card-image'>
                <img src={img} alt='shop-knife' />
            </div>
            <div className='shop-card-description'>
                <div className='shop-card-title'>
                    <span>{name}</span>
                </div> 
                <p>${price}.00</p>
            </div>
            <button type='button' onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
    )
}

export default ShopCard;