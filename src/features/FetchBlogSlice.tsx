import {createSlice } from "@reduxjs/toolkit";
import { blogs } from "../types/types";
import { fetchBlogs } from "../Actions/actions";
type Blogstate = {
    isloading: boolean
    blog: blogs[]
    iserror: string
}

const initialState: Blogstate = {
    isloading: false,
    blog: [],
    iserror: ""
}


export const fetchingslice = createSlice({
    name: 'fetchBlogs',
    initialState,
    reducers: {
    },
   
    extraReducers: (builder) => {

        
        builder.addCase(fetchBlogs.pending, (state,action) => {
            state.isloading = true;
            console.log("actions:",action);
            
        })

        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isloading = false;
            state.blog = action.payload;
            console.log("fulfill the request",state.blog);
            
        })

        builder.addCase(fetchBlogs.rejected, (state, action) => {
            console.log(action.error);
            state.isloading=false;
            state.iserror = action.error.message || "Something went wrong";
        })
    }
})

export default fetchingslice.reducer