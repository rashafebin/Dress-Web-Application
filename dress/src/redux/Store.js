import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './Slice.js/Productslice'
import wishlistReducer from './Slice.js/Wishlistslice'

export const store = configureStore({
  reducer: {
   
    products:productsReducer,
    wishlist :wishlistReducer
  },
})