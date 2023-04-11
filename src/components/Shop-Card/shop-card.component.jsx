import './shop-card.styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

const ShopCard = ({ product }) => {
    const { img, name, price } = product; 
    const { addItemToCart } = useContext(CartContext);

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
            <button type='button' onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
    )
}

export default ShopCard;