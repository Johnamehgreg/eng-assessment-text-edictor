import { createSlice } from '@reduxjs/toolkit'

export interface ItemState {
  data: any[]
}

const initialState: ItemState = {
  data: []
}

export const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    storeItem: (state, action) => {
     
      state.data = action.payload

    },
  },
})

// Action creators are generated for each case reducer function
export const { storeItem } = itemListSlice.actions

export default itemListSlice.reducer
