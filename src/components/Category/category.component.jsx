import './category.styles.css';

import ShopCard from '../Shop-Card/shop-card.component';
import PriceSlider from '../PriceSlider/price-slider.component';

import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(36500);

    const categoryTitle = category.toUpperCase().replace(/-/g, ' ')

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    useEffect(() => {
        const newFilteredProducts = categoriesMap[category].filter(product => product.price >= minPrice && product.price <= maxPrice);
        setFilteredProducts(newFilteredProducts)
    }, [categoriesMap, category, minPrice, maxPrice])
    
    
    const onMinChange = (sliderOne) => {
        const newMin = sliderOne.value;
        setMinPrice(newMin);
    }

    const onMaxChange = (sliderTwo) => {
        const newMax = sliderTwo.value;
        setMaxPrice(newMax);
    }

    return (
        <div className='category-container'>
            <div className='category-cards-container'>
                <span className='category-title'>{categoryTitle}</span>
                <div className='category-cards'>
                    {products && filteredProducts.map((product) => (
                        <ShopCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className='category-sort-container'>
                <div className='category-filter-by-price-container'>
                    <span>Filter By Price</span>
                    <hr /> 
                    <PriceSlider onMinChange={onMinChange} onMaxChange={onMaxChange}/>
                </div>
            </div>
        </div>
    )
}

export default Category; 
