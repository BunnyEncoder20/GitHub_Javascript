import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    
    initialState : {
        status : false,
        userData : null
    },
    
    reducers : {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            console.log("user data set in store");
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
            console.log("user data removd from store");
        }
    }
})

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;