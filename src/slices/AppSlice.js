import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loginId: ''
}

export const AppSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setLoginId(st, action) {
            const loginId = action.payload;
            st.loginId = loginId;
        }
    }
})

export const  { setLoginId } = AppSlice.actions


export default AppSlice.reducer;
