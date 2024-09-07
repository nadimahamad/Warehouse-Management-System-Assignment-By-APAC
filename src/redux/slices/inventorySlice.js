import {createSlice} from '@reduxjs/toolkit';

const initialInventory = [
  {
    id: 1,
    name: 'Item A',
    quantity: 10,
    location: 'Shelf A3',
    owner: 'User1',
    description: 'This is item A',
  },
  {
    id: 2,
    name: 'Item B',
    quantity: 15,
    location: 'Shelf B2',
    owner: 'User2',
    description: 'This is item B',
  },
];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {items: initialInventory},
  reducers: {
    addItem(state, action) {
      state.items.push({id: state.items.length + 1, ...action.payload});
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem(state, action) {
      const {id, quantity, location, description} = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        // Only update the fields if provided in the payload
        if (quantity !== undefined) item.quantity = quantity;
        if (location !== undefined) item.location = location;
        if (description !== undefined) item.description = description;
      }
    },
  },
});

export const {addItem, deleteItem, updateItem} = inventorySlice.actions;
export default inventorySlice.reducer;
