import {ActionsCate} from "./models/actions-type";
import {AppActions} from "../models/action-types";


export const changeSelectedTab = (selectedTab:string):AppActions=>({
    type:ActionsCate.SELECTED_TAB,
    selectedTab
})

export const changeCateType = (cateType:string):AppActions=>({
    type:ActionsCate.CATE_TYPE,
    cateType
})

export const changeCateAside = (cateAside:string):AppActions=>({
    type:ActionsCate.CATE_ASIDE,
    cateAside
})