import { createContext, useState, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const ShopContext = createContext({
    products: {},
    setProducts: () => {},
    filteredProducts: [],
    setFilteredProducts: () => [],
    selected: '',
    setSelected: () => {},
})

const INITIAL_STATE = {
    products: {},
    filteredProducts: [],
    selected: '',
}

const SHOP_ACTION_TYPES = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SET_FILTERED_PRODUCTS: 'SET_FILTERED_PRODUCTS',
    SET_SELECTED: 'SET_SELECTED',
}

const shopReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case SHOP_ACTION_TYPES.SET_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        case SHOP_ACTION_TYPES.SET_FILTERED_PRODUCTS:
            return {
                ...state, 
                filteredProducts: payload,
            }
        case SHOP_ACTION_TYPES.SET_SELECTED:
            return {
                ...state,
                selected: payload,
            }
        default: 
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
}


export const ShopProvider = ({children}) => {

    const [ { products, filteredProducts, selected }, dispatch ] = useReducer(shopReducer, INITIAL_STATE);

    const setProducts = (newProducts) => {
        dispatch(createAction(SHOP_ACTION_TYPES.SET_PRODUCTS, newProducts));
    }

    const setFilteredProducts = (newFilteredProducts) => {
        dispatch(createAction(SHOP_ACTION_TYPES.SET_FILTERED_PRODUCTS, newFilteredProducts));
    }

    const setSelected = (newSelected) => {
        dispatch(createAction(SHOP_ACTION_TYPES.SET_SELECTED, newSelected));
    }

    const value = {products, setProducts, filteredProducts, setFilteredProducts, selected, setSelected}

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}