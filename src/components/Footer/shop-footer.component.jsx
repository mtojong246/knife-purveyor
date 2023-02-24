import './shop-footer.styles.css';

const ShopFooter = () => {
    return (
        <div className='shop-footer-container'>
            <span>Shop</span>
            <div className='shop-links'>
                <p>New Knives</p>
                <p>Featured</p>
                <p>Knives By Maker</p>
                <p>Engraved</p>
                <p>Folding</p>
                <p>Fixed Blade</p>
                <p>Previously Sold</p>
            </div>
        </div>
    )
}

export default ShopFooter;