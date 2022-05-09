import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: 1,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUser: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creat ors are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer