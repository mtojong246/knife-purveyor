import './filterBy.styles.css';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories-selectors';

const FilterBy = ({category, onSelectChange}) => {

    const categoriesMap = useSelector(selectCategoriesMap)

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