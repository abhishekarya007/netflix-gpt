import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        movies:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies =  action.payload
        }
    }
})

export const {addMovies} = movieSlice.actions

export default movieSlice.reducer