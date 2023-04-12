import './search-bar.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [ searchField, setSearchField ] = useState('');

    const nav = useNavigate();

    const onChangeHandler = (event) => {
        const newSearch = event.target.value;
        setSearchField(newSearch);
    }

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            const newSearch = searchField.toLowerCase().replace(/\s+/g, '-');
            nav(`./shop/search/${newSearch}`);
        }
        return
    }


    return (
        <div className='search-bar-container'>
            <input type='text' placeholder='Search products...' onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
        </div>
    )
}

export default SearchBar;