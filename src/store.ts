import { configureStore } from '@reduxjs/toolkit'
import callerReducer from './slice/caller-slice'
import cardReducer from './slice/card-slice'
import modalReducer from './slice/modal-slice'


export const store = configureStore({
  reducer: {caller: callerReducer, card: cardReducer, modal: modalReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch