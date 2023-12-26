import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalSlice {
  isOpen: boolean
}

const initialState: ModalSlice = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
    },
    // decrement: (state) => {
    //   state.isOpen -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.isOpen += action.payload
    // },
  },
})

export const { toggle } = modalSlice.actions

export const selectIsOpen = (state: RootState) => state.modal.isOpen

export default modalSlice.reducer