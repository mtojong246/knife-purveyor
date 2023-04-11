import './filterBy.styles.css';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

const FilterBy = ({category, onSelectChange}) => {

    const { categoriesMap } = useContext(CategoriesContext);

    const unsortedArray = Object.keys(categoriesMap).map(title => categoriesMap[title]);
    const sortedArray = unsortedArray.flat().map(product => product[category]).sort()
    const cleanArray = [...new Set(sortedArray)].filter(item => item !== '')  

    const onSelectChangeHandler = (event) => {
        onSelectChange(event.target.value)
    }


    return (
        <div className='filter-by-container'>
            <span>Filter By {category}</span>
            <hr />
            <div className='filter-by-dropdown'>
                <select name='filter-dropdown' onChange={onSelectChangeHandler}>
                    <option value=''>Any {category}</option>
                    {cleanArray.map(char => (
                        <option key={char} value={char}>{char}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterBy;