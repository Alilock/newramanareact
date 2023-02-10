import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    ordersData: [],
    orderData: null,
    loading: false,
    loadingById: false
}

export const fetchAllOrders = createAsyncThunk("orders/getAlll", async () => {
    const response = await axios.get("https://newramanaapplication.azurewebsites.net/api/shop");
    return response.data.data;
});
export const fetchOrderById = createAsyncThunk("orders/getByIdd", async (id) => {
    const response = await axios.get(`https://newramanaapplication.azurewebsites.net/api/shop/${id}`);
    return response.data.data;
});

export const orderSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllOrders.pending, (state, action) => {

            state.ordersData = action.payload
            state.loading = true
        })
            .addCase(fetchAllOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.ordersData = action.payload;
            })
            // .addCase(fetchAllGenders.rejected, (state, action) => {
            //     // state.loading = false
            // })
            .addCase(fetchOrderById.pending, (state, action) => {
                state.loadingById = true;
            })
            .addCase(fetchOrderById.fulfilled, (state, action) => {
                state.orderData = action.payload
                state.loadingById = false
            })
    }
})

export const getAllOrders = (state) => state.order.ordersData;
export const getLoading = (state) => state.order.loading
export const getOrder = (state) => state.order.orderData
export const getOrderLoading = (state) => state.order.loadingById
export default orderSlice.reducer