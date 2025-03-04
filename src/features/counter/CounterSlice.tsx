//basically slice includes the initial value and the reducers function to update the state in this case it is counter whoes value initially is still 0

// The state (initial values)

// {Reducers=>(functions to update the state) Reducers are functions that modify the state based on actions.
// They take the current state and an action as input and return the new state.}

// Actions (functions that trigger state updates)

import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
    value: number,
}

const initialState: CounterState = {
    value: 0,  //initial value of the state
}
export const counterSlice = createSlice({
    name: 'counter',//slicename
    initialState,//Initial state
    reducers: {
        increment: state => {     //Actions of increnent
            state.value += 1;
        },
        decrement: state => {   //Action of decrement
            state.value -= 1;
        },

    }
})

//I export counterSlice actions such increment and decrement
// Exports action creators (increment, decrement) to dispatch actions.
export const {increment,decrement}=counterSlice.actions

// Exports the reducer function to be used in the Redux store. 
//we tell the store to use this slice reducer function to handle all updates to that state.
//register reducer in store
export default counterSlice.reducer