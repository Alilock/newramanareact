
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categories/categorySlice'
import genderSlice from "./gender/genderSlice";
import productReducer from './products/productSlice'
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        gender: genderSlice,

    }
})