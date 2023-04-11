import { createContext, useState } from "react";

export const ShopContext = createContext({
    products: {},
    setProducts: () => {},
    filteredProducts: [],
    setFilteredProducts: () => [],
    selected: '',
    setSelected: () => {},
})


export const ShopProvider = ({children}) => {
    const [products, setProducts] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selected, setSelected] = useState('');

    const value = {products, setProducts, filteredProducts, setFilteredProducts, selected, setSelected}

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}