


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const signupForm = createAsyncThunk('/signup/user', async (data) => {


    try {
        let { name, email, password, mobile, bio, age } = data;

        const res = await axios.post('/api/v1/users/signup', {
            name, email, password
        }, {
            withCredentials: true
        })
        if (res) {
            return res


        }
    } catch (error) {

        return error.response;
    }


})

export const loginForm = createAsyncThunk('/login/user', async (data) => {


    try {
        let { email, password } = data;

        const res = await axios.post('/api/v1/auth/login', {
            email, password
        }, {
            withCredentials: true
        })
        if (res?.payload?.data?.status == "success") {
            return res.payload.data


        }
        return res
    } catch (error) {

        return error.response;
    }


})

const initialState = {
    data: localStorage.getItem("data") && JSON.parse(localStorage.getItem("data")) || '',
    isLoggedIn: localStorage.getItem("isLoggedIn") && JSON.parse(localStorage.getItem("isLoggedIn")) || 'false',
}
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(signupForm.fulfilled, (state, action) => {

            console.log(action);
            if (action?.payload?.data?.status == "success") {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.user))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.data;
            }


        }).addCase(loginForm.fulfilled, (state, action) => {
            console.log(action);
            if (action?.payload?.data?.status == "success") {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.data))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.data;
            }


        })

    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer

































