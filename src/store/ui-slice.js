import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsAvailable:false,notification:null},
    reducers:{
        toggle(state){
            state.cartIsAvailable=!state.cartIsAvailable;
        },
        showNotification(state,action){
            state.notification={
             title:action.payload.title,
             status:action.payload.status,
             message:action.payload.message
            }
        }
    }
})
export const uiAction=uiSlice.actions;
export default uiSlice;