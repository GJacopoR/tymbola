import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
// import type { PayloadAction } from '@reduxjs/toolkit'

const array:number[] = Array(90);

for (let i = 0; i < 90; i++) {
    i === 0 ? array[0] = 1 : array[i] = array[i-1] + 1
} 

export interface CallerSlice {
    history: number[]
    repository: number[]
}   

const initialState: CallerSlice = {
    history: [],
    repository: array
}

export const callerSlice = createSlice({
  name: 'caller',
  initialState,
  reducers: {
    extract: (state) => {
        const position = Math.floor(Math.random() * (state.repository.length +1))
        const extracted = state.repository.splice(position, 1)[0]
        extracted && state.history.push(extracted)
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { extract } = callerSlice.actions

export const selectHistory = (state: RootState) => state.caller.history

export const selectRepository = (state: RootState) => state.caller.repository

export default callerSlice.reducer