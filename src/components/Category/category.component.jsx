import './category.styles.css';
import ShopCard from '../Shop-Card/shop-card.component';
import PriceSlider from '../PriceSlider/price-slider.component';
import Spinner from '../Spinner/spinner.component';

import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import FilterBy from '../FilterBy/filterBy.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap, isLoading } = useContext(CategoriesContext);
    const [filteredProducts, setFilteredProducts] = useState(categoriesMap[category]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(36500);
    
    
    const categoryTitle = category.toUpperCase().replace(/-/g, ' ');

    const filterArray = ['knife-maker', 'blade-material', 'locking-mechanism', 'scale-material', 'condition'];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        setFilteredProducts(categoriesMap[category])
    }, [categoriesMap, category])


    useEffect(() => {
        setTimeout(() => {
            const newFilteredProducts = categoriesMap[category].filter(product => product.price >= minPrice && product.price <= maxPrice);
            setFilteredProducts(newFilteredProducts)
        }, 0)
            
    }, [categoriesMap, category, minPrice, maxPrice])

    const onSelectChange = (selected) => {
        let filteredBy = '';
        const filter = () => {
            if(selected === '') {
                filteredBy = categoriesMap[category].flat().map(product => product);
            } else if ((categoriesMap[category].map(product => product['knife-maker'])).includes(selected)) {
                filteredBy = categoriesMap[category].filter(product => product['knife-maker'] === selected);
            } else if ((categoriesMap[category].map(product => product['blade-material'])).includes(selected)) {
                filteredBy = categoriesMap[category].filter(product => product['blade-material'] === selected);
            } else if ((categoriesMap[category].map(product => product['locking-mechanism'])).includes(selected)) {
                filteredBy = categoriesMap[category].filter(product => product['locking-mechanism'] === selected);
            } else if ((categoriesMap[category].map(product => product['scale-material'])).includes(selected)) {
                filteredBy = categoriesMap[category].filter(product => product['scale-material'] === selected);
            } else if ((categoriesMap[category].map(product => product.condition)).includes(selected)) {
                filteredBy = categoriesMap[category].filter(product => product.condition === selected);
            }
        }
        filter()
        setFilteredProducts(filteredBy);
    }

    const onMinChange = (sliderOne) => {
        const newMin = sliderOne.value;
        setMinPrice(newMin);
    }

    const onMaxChange = (sliderTwo) => {
        const newMax = sliderTwo.value;
        setMaxPrice(newMax);
    }


    return (
        <>
        {isLoading ? (
            <Spinner />
        ) : (
            <div className='category-container'>
                <div className='category-cards-container'>
                    <span className='category-title'>{categoryTitle}</span>
                    <div className='category-cards'>
                        {filteredProducts && Array.isArray(filteredProducts) === true && filteredProducts.map((product) => (
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
                    {filterArray.map(category => (
                        <FilterBy category={category} onSelectChange={onSelectChange} />
                    ))}
                </div>
            </div>
        )}
        </>
    )
}

export default Category; 
