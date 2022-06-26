import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import userSlice from '../features/userSlice';
import cartSlice from '../features/cartSlice';


export const store = configureStore({
  reducer: {
    user : userSlice,
    products : productSlice,
    cart : cartSlice
  },
});
