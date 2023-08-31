import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  job: null,
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJob:(state,action) =>{
      state.job=action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { setJob } = jobSlice.actions

export default jobSlice.reducer