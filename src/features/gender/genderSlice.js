import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    gendersData: [],
    genderData: null,
    loading: false,
    loadingById: false
}

export const fetchAllGenders = createAsyncThunk("genders/getAll", async () => {
    const response = await axios.get("https://newramanaapplication.azurewebsites.net/api/gender");
    return response.data.data;
});
export const fetchGenderById = createAsyncThunk("genders/getById", async (id) => {
    const response = await axios.get(`https://newramanaapplication.azurewebsites.net/api/gender/${id}`);
    return response.data.data;
});

export const genderSlice = createSlice({
    name: "genders",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllGenders.pending, (state, action) => {

            state.gendersData = action.payload
            state.loading = true
        })
            .addCase(fetchAllGenders.fulfilled, (state, action) => {
                state.loading = false;
                state.gendersData = action.payload;
            })
            // .addCase(fetchAllGenders.rejected, (state, action) => {
            //     // state.loading = false
            // })
            .addCase(fetchGenderById.pending, (state, action) => {
                state.loadingById = true;
            })
            .addCase(fetchGenderById.fulfilled, (state, action) => {
                state.genderData = action.payload
                state.loadingById = false
            })
    }
})

export const getAllGenders = (state) => state.gender.gendersData;
export const getLoading = (state) => state.gender.loading
export const getGender = (state) => state.gender.genderData
export const getGenderLoading = (state) => state.gender.loadingById
export default genderSlice.reducer