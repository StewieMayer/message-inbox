import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ThreadState {
  threads: Array<string>;
}

const initialState: ThreadState = { threads: [] };

const threadSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addThreads: (state, action: PayloadAction<Array<string>>) => {
      state.threads = action.payload;
    },
  },
});

export const { addThreads } = threadSlice.actions;
export default threadSlice.reducer;
