import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './UserSlice'

export default store = configureStore({
  reducer: {
    user: counterReducer,
  },
})