import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slice/card-slice'
import modalSlice from './slice/modal-slice'

export const store = configureStore({
  reducer: {card: cardReducer, modal: modalSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch