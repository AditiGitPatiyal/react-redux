import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/UserSlice'
import jobReducer from'./Job/JobSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    job:jobReducer
  },
})