import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import inventoryReducer from './slices/inventorySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    inventory: inventoryReducer,
  },
});

export default store;
