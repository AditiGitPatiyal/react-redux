import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  job: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    store: (state,action) => {
      state.user = action.payload;
    },
    setJob:(state,action) =>{
      state.job=action.payload
    }
    ,
    logoutUser: (state) => {
      state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { store, logoutUser,setJob } = userSlice.actions

export default userSlice.reducer