import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
  


const initialState ={
    viewproducts:[],
    Error:'',
    loading:false    
}

 export const getproducts = createAsyncThunk('getproducts',async()=>{
    const response = await axios.get('http://127.0.0.1:8000/view_product_api/')
    return response.data.data
}
)

const productsslice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getproducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(getproducts.fulfilled,(state,action)=>{
            state.loading=false
            

            state.viewproducts=action.payload
        })
        builder.addCase(getproducts.rejected,(state,action)=>{
            state.loading= false
            state.Error=action.error.message
        })
    }
});

export default productsslice.reducer
