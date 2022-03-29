import * as redux from "redux"
import userReducer from "./user/userReducer"
import thunk from "redux-thunk"


export const store=redux.createStore(userReducer,redux.applyMiddleware(thunk))