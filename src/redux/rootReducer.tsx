import { combineReducers } from "redux";

import {cookbookReducer} from "./Cookbook/reducer";


export const rootReducer = combineReducers({
    cookbookReducer
})