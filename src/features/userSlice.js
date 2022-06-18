import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : null 
    },
    reducers : {
        login : (state, action) => {
            state.user = action.payload
        },
        notLogin : (state) => { 
            state.user = null
        }
    }
})

export const userSelector = (state) => state.user.user
export const { login, notLogin } = userSlice.actions
export default userSlice.reducer