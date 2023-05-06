import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as DressReducer } from "./productReducer/reducer";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./authReducer/reducer"
import {reducer as adminReducer} from "./adminReducer/reducer"
const rootReducer = combineReducers({
    authReducer,DressReducer,adminReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
