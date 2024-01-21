import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalSlice {
  bodySelectionContent: 'options' | 'new' | 'load' | 'create',
  isOpen: boolean,
}

const initialState: ModalSlice = {
  bodySelectionContent: 'options',
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setBodySelectionContent: (state, action: PayloadAction<'options' | 'new' | 'load' | 'create'>) => {
      state.bodySelectionContent = action.payload
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen;
      state.bodySelectionContent = 'options'
    },
  },
})

export const { setBodySelectionContent, toggle } = modalSlice.actions

export const selectBodySelectionContent = (state: RootState) => state.modal.bodySelectionContent;

export const selectIsOpen = (state: RootState) => state.modal.isOpen

export default modalSlice.reducer