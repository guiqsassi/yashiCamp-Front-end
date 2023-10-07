import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/userReducer";
import store from "./store";
const rootReducer = combineReducers({
    user: userReducer
})


export default rootReducer
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch