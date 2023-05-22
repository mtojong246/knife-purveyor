import './shop.styles.css';
import ShopCard from '../Shop-Card/shop-card.component';
import PriceSlider from '../PriceSlider/price-slider.component';
import FilterBy from '../FilterBy/filterBy.component';
import Spinner from '../Spinner/spinner.component';
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories-selectors';

const Shop = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [filteredProducts, setFilteredProducts] = useState(categoriesMap);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(36500);
    

    const filterArray = ['knife-maker', 'blade-material', 'locking-mechanism', 'scale-material', 'condition']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
       const filteredByPrice = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product.price >= minPrice && product.price <= maxPrice));
       setFilteredProducts(filteredByPrice)
    }, [categoriesMap, minPrice, maxPrice])

    const onSelectChange = (selected) => {
        let filteredBy = '';
        const filter = () => {
            if(selected === '') {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].flat().map(product => product));
            } else if (((Object.keys(categoriesMap).map(title => categoriesMap[title])).flat()).map(product => product['knife-maker']).includes(selected)) {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product['knife-maker'] === selected));
            } else if (((Object.keys(categoriesMap).map(title => categoriesMap[title])).flat()).map(product => product['blade-material']).includes(selected)) {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product['blade-material'] === selected));
            } else if (((Object.keys(categoriesMap).map(title => categoriesMap[title])).flat()).map(product => product['locking-mechanism']).includes(selected)) {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product['locking-mechanism'] === selected));
            } else if (((Object.keys(categoriesMap).map(title => categoriesMap[title])).flat()).map(product => product['scale-material']).includes(selected)) {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product['scale-material'] === selected));
            } else if (((Object.keys(categoriesMap).map(title => categoriesMap[title])).flat()).map(product => product.condition).includes(selected)) {
                filteredBy = Object.keys(categoriesMap).map(title => categoriesMap[title].filter(product => product.condition === selected));
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
                        <span className='filter'>Filter By Price</span>
                        <hr /> 
                        <PriceSlider id='price' onMinChange={onMinChange} onMaxChange={onMaxChange} />
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

export default Shop; 


//<FilterByMaker id='maker' onSelectChange={onSelectChange}/>