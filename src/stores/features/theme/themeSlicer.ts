import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    value: string;
}

const initialState: ThemeState = {
    value: "auto"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;