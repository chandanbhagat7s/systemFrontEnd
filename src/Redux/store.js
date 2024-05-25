import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import errorslice from "./slices/errorslice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        error: errorslice
    },

})

export default store
















