import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as DressReducer } from "./productReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ DressReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
