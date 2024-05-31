

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        email:'', password:''
    }
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        // setUser: ()=> {} 
        setUser: function (state, action) {
            state.user = action.payload
        }
    }
})

export const {setUser} = loginSlice.actions
export default loginSlice.reducer