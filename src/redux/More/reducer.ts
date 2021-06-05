import {MoreActions,MoreActionsTypes} from "./models/actions-types";


interface DefaultState {
    checked:boolean;
}

const defaultState:DefaultState = {
    // checked:localStorage.getItem("checked")==="true"?true : false,
    checked:JSON.parse(localStorage.getItem("checked")!),
}

export const moreReducers = (state= defaultState,action:MoreActionsTypes):DefaultState=>{
    switch(action.type){
        case MoreActions.CHECKED_STATE:
            return {
                ...state,
                checked:state.checked = action.checked,
            }
        default:
            return state;
    }
}