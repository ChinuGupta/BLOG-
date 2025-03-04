import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/CounterSlice'
import fetchUser from '../features/FetchUserSlice'
import fetchBlog from '../features/FetchBlogSlice'

export const store = configureStore({

    reducer: {
        // counter: counterReducer,
        fetchUsers:fetchUser,
        fetchBlog:fetchBlog
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;