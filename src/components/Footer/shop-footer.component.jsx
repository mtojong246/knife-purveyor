import './shop-footer.styles.css';
import { NavLink } from 'react-router-dom';

const ShopFooter = () => {
    return (
        <div className='shop-footer-container'>
            <span>Shop</span>
            <div className='shop-links'>
                <p>New Knives</p>
                <p>Featured</p>
                <p>Knives By Maker</p>
                <NavLink className='shop-link' to='/shop/engraved'><p>Engraved</p></NavLink>
                <NavLink className='shop-link' to='/shop/folding'><p>Folding</p></NavLink>
                <NavLink className='shop-link' to='/shop/fixed-blade'><p>Fixed Blade</p></NavLink>
                <p>Previously Sold</p>
            </div>
        </div>
    )
}

export default ShopFooter;