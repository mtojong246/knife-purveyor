import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Shop from '../../components/Shop/shop.component';
import Category from '../../components/Category/category.component';
import Item from '../../components/Item/item.component';
import SearchResults from '../../components/SearchResults/search-results.component';
import { fetchCategoriesStart } from '../../store/categories/categories-actions';

const ShopRoute = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
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