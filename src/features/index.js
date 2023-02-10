
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categories/categorySlice'
import genderSlice from "./gender/genderSlice";
import productReducer from './products/productSlice'
import orderReducer from './orders/orderSlice'
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        gender: genderSlice,
        order: orderReducer
    }
})