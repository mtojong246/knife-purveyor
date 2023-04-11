import { Routes, Route } from 'react-router-dom';

import Shop from '../../components/Shop/shop.component';
import Category from '../../components/Category/category.component';
import Item from '../../components/Item/item.component';

const ShopRoute = () => {
    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path=":category" element={<Category />} />
            <Route path="/knives/:item" element={<Item />} />
        </Routes>
    )
}

export default ShopRoute;