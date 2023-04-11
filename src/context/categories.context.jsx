import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
//import { SHOP_DATA } from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
    isLoading: true,
});

export const CategoriesProvider = ({children}) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    //useEffect(() => {
    //    addCollectionAndDocuments('categories', SHOP_DATA);
    //}, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
            setIsLoading(false);
        }
        getCategoriesMap();
    }, [])

    

    const value = {categoriesMap, isLoading};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}