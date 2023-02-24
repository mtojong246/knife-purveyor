import './shop-dropdown.styles.css';
import { NavLink } from 'react-router-dom';

const ShopDropdown = () => {
    return (
        <ul className='shop-dropdown'>
            <NavLink className='nav-linked' to='/shop'><li>All Knives</li></NavLink>
            <li>New Knives</li>
            <NavLink className='nav-linked' to='/shop/every-day-carry-knives'><li>Every Day Carry Knives</li></NavLink>
            <NavLink className='nav-linked' to='/shop/collector-grade-knives'><li>Collector Grade</li></NavLink>
            <NavLink className='nav-linked' to='/shop/investment-quality-knives'><li>Investment Quality</li></NavLink>
            <NavLink className='nav-linked' to='/shop/fixed-blade'><li>Fixed Blade</li></NavLink>
            <NavLink className='nav-linked' to='/shop/folding'><li>Folding</li></NavLink>
            <NavLink className='nav-linked' to='/shop/automatics'><li>Automatics</li></NavLink>
            <NavLink className='nav-linked' to='/shop/engraved'><li>Engraved</li></NavLink>
            <li>Other Collectibles</li>
        </ul>
    )
}

export default ShopDropdown;