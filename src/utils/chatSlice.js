import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messeges: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messeges.splice(LIVE_CHAT_COUNT,1)
      state.messeges.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
