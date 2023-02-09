import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    productsData: [],
    loading: false,
    productData: null,
    loadingById: false
}

export const fetchAllProducts = createAsyncThunk("products/getAPI", async () => {
    const response = await axios.get("https://newramanaapplication.azurewebsites.net/api/product");
    return response.data.data;
});

export const fetchProductById = createAsyncThunk("genders/getById", async (id) => {
    const response = await axios.get(`https://newramanaapplication.azurewebsites.net/api/product/${id}`);
    return response.data.data;
});


export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true
        })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productsData = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                // state.loading = false
            })
            .addCase(fetchProductById.pending, (state, action) => {
                state.loadingById = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.productData = action.payload
                state.loadingById = false
            })

    }
})

export const getAllProducts = (state) => state.product.productsData;
export const getLoading = (state) => state.product.loading;
export const getProduct = (state) => state.product.productData
export const getProductLoading = (state) => state.product.loadingById
export default productSlice.reducer