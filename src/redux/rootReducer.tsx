import { combineReducers } from "redux";

import {cookbookReducer} from "./Cookbook/reducer";
import {moreReducers} from "./More/reducer";

export const rootReducer = combineReducers({
    cookbookReducer,
    moreReducers
})