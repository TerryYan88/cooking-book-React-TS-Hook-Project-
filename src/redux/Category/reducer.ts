import {ActionsCate,ActionsCateType} from "./models/actions-type";

interface DefaultState{
    routeInfo:{
        selectedTab:string;
        cateType:string;
        cateAside:string;
    }
}

const defaultState:DefaultState = {
    routeInfo:{
        selectedTab:"cookbook",
        cateType:"category",
        cateAside:"",
    }
}

export const cateReducer = (state=defaultState,action:ActionsCateType):DefaultState=>{
    switch(action.type){
        case ActionsCate.SELECTED_TAB:
            return {
                routeInfo:{
                    ...state.routeInfo,
                    selectedTab:state.routeInfo.selectedTab = action.selectedTab
                },  
            }
        case ActionsCate.CATE_TYPE:
            return {
                routeInfo:{
                    ...state.routeInfo,
                    cateType:state.routeInfo.cateType = action.cateType
                }
            }
        case ActionsCate.CATE_ASIDE:
            return {
                routeInfo:{
                    ...state.routeInfo,
                    cateAside:state.routeInfo.cateAside = action.cateAside
                }
            }
        default:
            return state;
    }
}