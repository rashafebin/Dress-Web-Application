import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
  


const initialState ={
    viewwishlist:[],
    Error:'',
    loading:false    
}

 export const getwishlist = createAsyncThunk('getwishlist',async(login_id)=>{
    const response = await axios.get(`http://127.0.0.1:8000/view_wishlist_api/${login_id}`);
    return response.data
}
)

const wishlistslice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getwishlist.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(getwishlist.fulfilled,(state,action)=>{
            state.loading=false
            console.log(action);


            state.viewwishlist=action.payload.wishlist
        })
        builder.addCase(getwishlist.rejected,(state,action)=>{
            state.loading= false
            state.Error=action.payload || action.error.message
        })
    }
});

export default wishlistslice.reducer
