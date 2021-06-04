import {CookBookActions} from "./model/action-types";
import {ListAsyncActions} from "./model/action-types";
import {List} from "./model/cookbook";
interface LisState{
    list:List[]
}

const defaultState:LisState = {
    list:[]
}

export const cookbookReducer = (state=defaultState,action:ListAsyncActions):LisState=>{
    switch(action.type){
        case CookBookActions.LOAD_DATA:
            return {
                list:action.list
            }
        default:
            return state;
    }

}