import './search-results.styles.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ShopCard from '../Shop-Card/shop-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories-selectors';


const SearchResults = () => {
    const { result } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        const newItems = (Object.keys(categoriesMap).map(title => categoriesMap[title]).flat().filter(product => product.name.toLowerCase().includes(result.toLowerCase().replace(/-/g, ' '))));
        setSearchResults(newItems);
    }, [result, categoriesMap])


    return (
        <div className='search-results-container'>
        {searchResults.length === 0 ? (
            <span className='result-title'>{`Sorry, no results for "${result.replace(/-/g, ' ')}"`}</span>
        ) : (
            <>
                <span className='result-title'>{`Search results for "${result.replace(/-/g, ' ')}"`}</span>
                <div className='search-results-cards'>
                {searchResults.map(product => (
                    <ShopCard key={product.id} product={product} />
                ))}
                </div>
            </>
        )}
        </div>
    )
}

export default SearchResults;