import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { numbers } from '../assets/smorfia.json'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface TombolaNumber {
  number: number,
  pronunciation: string,
  smorfia_meaning: string
}

export interface CallerSlice {
  history: TombolaNumber[],
  isCallerGameOngoing: boolean,
  isSmorfiaMode: boolean,
  repository: TombolaNumber[]
}

const repository: TombolaNumber[] = [...Object.values(numbers)]

const initialState: CallerSlice = {
  history: [],
  isCallerGameOngoing: false,
  isSmorfiaMode: true,
  repository: repository
}

export const callerSlice = createSlice({
  name: 'caller',
  initialState,
  reducers: {
    extract: (state) => {
      const position = Math.floor(Math.random() * (state.repository.length + 1))
      const extracted: TombolaNumber = state.repository.splice(position, 1)[0]
      extracted && state.history.push(extracted)
      state.isCallerGameOngoing = true;
    },

    restart: (state) => {
      state.repository = repository;
      state.history = [];
      state.isCallerGameOngoing = false;
    },

    switchIsSmorfiaMode: (state) => {
      state.isSmorfiaMode = !state.isSmorfiaMode
    }
  },
})

export const { extract, restart, switchIsSmorfiaMode } = callerSlice.actions;

export const selectHistory = (state: RootState) => state.caller.history;

export const selectIsCallerGameOngoing = (state: RootState) => state.caller.isCallerGameOngoing;

export const selectIsSmorfiaMode = (state: RootState) => state.caller.isSmorfiaMode;

export const selectRepository = (state: RootState) => state.caller.repository;

export default callerSlice.reducer;