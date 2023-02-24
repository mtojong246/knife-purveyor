import { Routes, Route } from 'react-router-dom';

import Shop from '../../components/Shop/shop.component';
import Category from '../../components/Category/category.component';

const ShopRoute = () => {
    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default ShopRoute;