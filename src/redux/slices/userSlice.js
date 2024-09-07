import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  role: 'Staff',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.role = action.payload.role || 'Staff';
    },
    logout(state) {
      state.username = '';
      state.role = 'Staff';
    },
  },
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
