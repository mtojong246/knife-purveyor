import './item.styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/spinner.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories-selectors';
import { selectCartItems } from '../../store/cart/cart-selectors';
import { addItemToCart } from '../../store/cart/cart-actions';

const Item = () => {
    const { item } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [selectedItem, setSelectedItem] = useState([])
    const [image, setImage] = useState('')

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    useEffect(() => {
        const newItem = (Object.keys(categoriesMap).map(title => categoriesMap[title]).flat().filter(product => product.name.toLowerCase() === item.toLowerCase().replace(/-/g, ' ') ))
        setSelectedItem(newItem)

        if (newItem.length === 0) {
            setImage('')
        } else (
            setImage(newItem[0].img)
        )
    }, [item, categoriesMap])

    const changeImage = (event) => {
        let newImg = event.target.src;
        setImage(newImg)
    }

    return (
        <>
        {selectedItem.length === 0 ? (
            <Spinner />
        ) : (
            <div className='ind-product-container'>
                <div className='ind-product-img'>
                    <div className='mini-img-container'>
                        <div><img src={selectedItem[0].img} alt='img1' onClick={changeImage}/></div>
                        <div><img src={selectedItem[0].img2} alt='img2' onClick={changeImage}/></div>
                        <div><img src={selectedItem[0].img3} alt='img3' onClick={changeImage}/></div>
                        <div><img src={selectedItem[0].img4} alt='img4' onClick={changeImage}/></div>
                    </div>
                    <img className='main-product-img' src={image} alt='ind-knife' />
                </div>
                <div className='ind-product-info'>
                    <span className='product-name'>{selectedItem[0].name}</span>
                    <p>${selectedItem[0].price}.00</p>
                    <button onClick={() => dispatch(addItemToCart(cartItems, selectedItem[0]))}>Add to Cart</button>
                    <p>Product Details</p>
                    <div className='product-details'>
                        <span className='first'>Knife Maker</span><span className='second'>{selectedItem[0]['knife-maker']}</span>
                        <span className='first'>Blade Length</span><span className='second'>{selectedItem[0]['blade-length']}</span>
                        <span className='first'>Overall Length</span><span className='second'>{selectedItem[0]['overall-length']}</span>
                        <span className='first'>Weight</span><span className='second'>{selectedItem[0].weight}</span>
                        <span className='first'>Blade Material</span><span className='second'>{selectedItem[0]['blade-material']}</span>
                        <span className='first'>Scale Material</span><span className='second'>{selectedItem[0]['scale-material']}</span>
                        <span className='first'>Condition</span><span className='second'>{selectedItem[0].condition}</span>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Item;