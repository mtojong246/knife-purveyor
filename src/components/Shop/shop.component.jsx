import './shop.styles.css';
import ShopCard from '../Shop-Card/shop-card.component';
import PriceSlider from '../PriceSlider/price-slider.component';

import { useState, useEffect, useContext, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(36500);

    useEffect(() => {
        setProducts(categoriesMap);
    }, [categoriesMap])


    useEffect(() => {
        const newFilteredProducts = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product.price >= minPrice && product.price <= maxPrice));
        setFilteredProducts(newFilteredProducts)
    }, [categoriesMap, minPrice, maxPrice])
    
    
    const onMinChange = (sliderOne) => {
        const newMin = sliderOne.value;
        setMinPrice(newMin);
    }

    const onMaxChange = (sliderTwo) => {
        const newMax = sliderTwo.value;
        setMaxPrice(newMax);
    }

    return (
        <div className='shop-container'>
            <div className='shop-cards-container'>
                <span>Shop</span>
                <div className='shop-cards'>
                    {Object.keys(filteredProducts).map(title => (
                        <Fragment key={title}>
                            {filteredProducts[title].map(product =>
                                <ShopCard key={product.id} product={product}/>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className='shop-sort-container'>
                <div className='filter-by-price-container'>
                    <span>Filter By Price</span>
                    <hr /> 
                    <PriceSlider onMinChange={onMinChange} onMaxChange={onMaxChange}/>
                </div>
            </div>
        </div>
    )
}

export default Shop; 