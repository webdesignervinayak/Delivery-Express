import { createSlice } from "@reduxjs/toolkit";
import { defaultLocation } from "./constants";

const locationSlice = createSlice({
    name : "location",
    initialState : {
        updateLocation : defaultLocation,
    },
    reducers : {
        getUpdatedLocation : (state,action) => {
            state.updateLocation = action.payload
        }
    }
} )

export const {getUpdatedLocation} = locationSlice.actions;

export default locationSlice.reducer;