import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories-actions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import Shop from '../../components/Shop/shop.component';
import Category from '../../components/Category/category.component';
import Item from '../../components/Item/item.component';
import SearchResults from '../../components/SearchResults/search-results.component';

const ShopRoute = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            dispatch(setCategories(categories));
            
        }
        getCategoriesMap();
    }, [])


    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path=":category" element={<Category />} />
            <Route path="/knives/:item" element={<Item />} />
            <Route path="/search/:result" element={<SearchResults />} />
        </Routes>
    )
}

export default ShopRoute;