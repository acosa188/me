import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "webState",
    initialState: {
        messageSentToast: false
    },
    reducers: {
        messageVisToggle: (state, action) => {
            state.messageSentToast = action.payload;
        }
    }
});

export default slice.reducer;

//Action
export const{
    messageVisToggle: messageVisToggleActionCreator
} = slice.actions;
