import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialStateFilter,
    reducers: {
        changeFilter: (state, action) => {
            state[action.payload.name] = action.payload.value;
        }
    }
});

export const { changeFilter } = filtersSlice.actions;
export const nameFilter = state => state.filters.name;

export const filterReducer = filtersSlice.reducer;