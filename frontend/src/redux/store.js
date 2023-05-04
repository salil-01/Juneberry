import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as DressReducer } from "./productReducer/reducer";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./authReducer/reducer"
const rootReducer = combineReducers({
    authReducer,DressReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
