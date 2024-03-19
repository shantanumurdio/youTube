import { createSlice } from "@reduxjs/toolkit";


const darkMode = createSlice({
    name: 'dark',
    initialState: {
        isdarkMode: true,
    },
    reducers:{
        darkModeOn: (state) => {
            state.isdarkMode = !state.isdarkMode;
        },
        darkModeOff: (state) => {
            state.isdarkMode = false;
        }
    }
})

export const {darkModeOn , darkModeOff} = darkMode.actions;
export default darkMode.reducer;