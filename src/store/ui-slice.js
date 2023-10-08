import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsAvailable:false},
    reducers:{
        toggle(state){
            state.cartIsAvailable=!state.cartIsAvailable;
        }
    }
})
export const uiAction=uiSlice.actions;
export default uiSlice;