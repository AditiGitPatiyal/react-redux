import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    store: (state,action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { store, logoutUser } = userSlice.actions

export default userSlice.reducer