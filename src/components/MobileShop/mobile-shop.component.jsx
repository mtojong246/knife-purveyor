import './mobile-shop.styles.css';
import { NavLink } from 'react-router-dom';

const MobileShop = () => {
    return (
        <div className='mobile-shop-container'>
            <div className='mobile-shop'>
                <NavLink className='nav-linked' to='/shop'><span>All Knives</span></NavLink>
                <NavLink className='nav-linked' to='/shop/every-day-carry-knives'><span>Every Day Carry Knives</span></NavLink>
                <NavLink className='nav-linked' to='/shop/collector-grade-knives'><span>Collector Grade</span></NavLink>
                <NavLink className='nav-linked' to='/shop/investment-quality-knives'><span>Investment Quality</span></NavLink>
                <NavLink className='nav-linked' to='/shop/fixed-blade'><span>Fixed Blade</span></NavLink>
                <NavLink className='nav-linked' to='/shop/folding'><span>Folding</span></NavLink>
                <NavLink className='nav-linked' to='/shop/automatics'><span>Automatics</span></NavLink>
                <NavLink className='nav-linked' to='/shop/engraved'><span>Engraved</span></NavLink>
            </div>
        </div>
    )
}

export default MobileShop;