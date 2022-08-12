import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "react-native-contacts";

interface ContactState {
    value: Contact[];
}

const initialState: ContactState = {
    value: []
}

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        changeContact: (state, action: PayloadAction<Contact[]>) => {
            state.value = action.payload;
        }
    }
});

export const { changeContact } = contactSlice.actions;

export default contactSlice.reducer;