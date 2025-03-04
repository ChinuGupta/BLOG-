import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs, getUsers } from "../services/authservice";
import { blogs, User } from "../types/types";


export const fetchUsers = createAsyncThunk<User[], void>("fetchingusers", async () => {
    try {
        const response = await getUsers();
        return response.data
    }
    catch(error){
        console.log(error);
        
    }
});


export const fetchBlogs = createAsyncThunk<blogs[], void>("fetchingblogs", async () => {
    try {
        const response = await getBlogs();
        return response.data
    }
    catch(error){
        console.log(error);
        
    }
});
