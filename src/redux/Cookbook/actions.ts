import {Dispatch} from "redux";
import {CookBookActions} from "./model/action-types";
import {AppActions} from "../models/action-types";
import {get} from "@/utils/http";
import {List} from "./model/cookbook";
const loadDataSync = (list:List[]):AppActions=>({
    type:CookBookActions.LOAD_DATA,
    list
})


const loadDataAsync = ()=> async(dispatch: Dispatch)=>{
    try{
        const result:any = await get({
            url:"/api/list"
        });
        dispatch(loadDataSync(result.data.data))
    }catch(err){

    }
}

export {
    loadDataSync,
    loadDataAsync
}