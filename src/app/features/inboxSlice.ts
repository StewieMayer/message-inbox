import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Thread } from "../../types/inboxTypes";

interface InboxState {
  currentThreads: Array<Thread>;
  currentTread: Thread | null;
  messageModalOpen: boolean;
}

const initialState: InboxState = {
  currentThreads: [],
  currentTread: null,
  messageModalOpen: false,
};

const InboxSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addThreads: (state, action: PayloadAction<Array<Thread>>) => {
      state.currentThreads = action.payload;
    },
    setCurrentThread: (state, action: PayloadAction<Thread>) => {
      state.currentTread = action.payload;
    },
    setMessageModalOpen: (state, action: PayloadAction<boolean>) => {
      state.messageModalOpen = action.payload;
    },
  },
});

export const { addThreads, setCurrentThread, setMessageModalOpen } =
  InboxSlice.actions;
export const selectInboxState = (state: RootState) => state.inbox;
export default InboxSlice.reducer;
