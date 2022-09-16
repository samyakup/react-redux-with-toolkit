import { configureStore } from '@reduxjs/toolkit'
import { AppSlice } from './slices'

const store = configureStore({
    reducer:{
        app: AppSlice.reducer
    }
})

export default store;
