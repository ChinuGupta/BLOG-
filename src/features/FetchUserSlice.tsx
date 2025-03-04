import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

import { fetchUsers } from '../Actions/actions'
type Userstate = {
    isloading: boolean
    user: User[]
    iserror: string
}

const initialState: Userstate = {
    isloading: false,
    user: [],
    iserror: ""
}


export const fetchingslice = createSlice({
    name: 'fetchUser',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isloading = true;
            console.log("actions:", action);

        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isloading = false;
            state.user = action.payload;
            console.log("fulfill the request", state.user);

        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log(action.error);
            state.isloading = false;
            state.iserror = action.error.message || "Something went wrong";
        })
    }
})

export default fetchingslice.reducer