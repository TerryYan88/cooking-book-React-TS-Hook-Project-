import {CookBookActions} from "./model/action-types";
import {ListAsyncActions} from "./model/action-types";
import {List} from "./model/cookbook";
interface ListState{
    list:List[]
}

const defaultState:ListState = {
    list:[]
}

export const cookbookReducer = (state=defaultState,action:ListAsyncActions):ListState=>{
    switch(action.type){
        case CookBookActions.LOAD_DATA:
            return {
                list:action.list
            }
        default:
            return state;
    }

}