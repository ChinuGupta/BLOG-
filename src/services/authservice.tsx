import axios from "axios";
import { API_ENDPOINTS } from "../constants/authConstants";
import { blogs, User } from "../types/types";


export const getUsers = async (credentials?: { email: string}) => {
    if (credentials) {
        return axios.get(API_ENDPOINTS.USERS, { params: credentials });
    }
    return axios.get(API_ENDPOINTS.USERS);
};

export const getUserById = async (id: string | undefined) => axios.get(`${API_ENDPOINTS.USERS}/${id}`)
export const registerUser = async (newUser: User) => axios.post(API_ENDPOINTS.USERS, newUser);
export const deleteUserService = async (id: string|undefined) => axios.delete(`${API_ENDPOINTS.USERS}/${id}`);
export const editUserServices = async (id: string | undefined, userData: User) => axios.put(`${API_ENDPOINTS.USERS}/${id}`, userData)


export const getBlogs = async () => axios.get(API_ENDPOINTS.BLOGS);
export const getBlogsById = async (id: string | undefined) => axios.get(`${API_ENDPOINTS.BLOGS}/${id}`)
export const addBlogService = async (newBlog: blogs) => axios.post(API_ENDPOINTS.BLOGS, newBlog);
export const deleteBlogService = async (id: number) => axios.delete(`${API_ENDPOINTS.BLOGS}/${id}`);
export const editBlogServices = async (id: string, blogData: blogs) => axios.put(`${API_ENDPOINTS.BLOGS}/${id}`, blogData);

export const setPasswordService = async (id: string, password: string) => {
    return axios.patch(`${API_ENDPOINTS.USERS}/${id}`, { password });
};
