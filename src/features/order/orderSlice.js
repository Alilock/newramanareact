// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   order: {},
//   status: null,
// };

// export const fetchOrder = createAsyncThunk("orders/getAll", async (payload) => {
//   const response = await axios.post(
//     "https://newramanaapplication.azurewebsites.net/api/shop",
//     payload
//   );
//   return response.data.data;
// });

// export const orderSlice = createSlice({
//   name: "orders",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrder.pending, (state, action) => {
//         state.status = "pending";
//       })
//       .addCase(fetchOrder.fulfilled, (state, action) => {
//         state.order = action.payload;
//         state.status = "success";
//       })
//       .addCase(fetchOrder.rejected, (state, action) => {
//         state.status = "fail";
//       });
//   },
// });

// export const getStatus = (state) => state.order.status;
// export const getOrder = (state) => state.order.order;
// export default orderSlice.reducer;