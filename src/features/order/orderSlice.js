import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
  orderData: [],
  orderByDetail: {},
  loading: false,
  loadingById: false,
};

export const fetchAllOrders = createAsyncThunk("orders/getAll", async () => {
  const response = await axios.get(
    "https://newramanaapplication.azurewebsites.net/api/shop/orders"
  );
  return response.data.data;
});
export const fetchOrderById = createAsyncThunk("orders/getById", async (id) => {
  const response = await axios.get(
    `https://newramanaapplication.azurewebsites.net/api/shop/orders/${id}`
  );
  return response.data;
});

export const fetchOrderByDetails = createAsyncThunk(
  "orders/getByDetails",
  async (id) => {
    const response = await axios.get(
      `https://newramanaapplication.azurewebsites.net/api/shop/orderdetail/${id}`
    );
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state, action) => {
        state.ordersData = action.payload;
        state.loading = true;
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
        state.orderData = action.payload;
        state.loadingById = false;
      })

      .addCase(fetchOrderByDetails.pending, (state, action) => {
        state.loadingById = true;
      })
      .addCase(fetchOrderByDetails.fulfilled, (state, action) => {
        state.orderByDetail = action.payload;
        state.loadingById = false;
      });
  },
});

export const getAllOrders = (state) => state.order.ordersData;
export const getLoading = (state) => state.order.loading;
export const getOrder = (state) => state.order.orderData;
export const getByDetails = (state) => state.order.orderByDetail;
export const getOrderLoading = (state) => state.order.loadingById;
export default orderSlice.reducer;
