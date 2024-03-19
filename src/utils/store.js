import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import darkMode from "./darkMode";


const store = configureStore({
    reducer: { 
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        dark: darkMode,
    }
})

export default store;