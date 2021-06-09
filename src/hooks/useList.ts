/* eslint-disable react-hooks/rules-of-hooks */

import { useHistory, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react";

import {loadDataAsync} from "@/redux/Cookbook/actions";
import { AppState } from "@/redux/rootStore";


export interface UseLocation {
    title: string
}

export const useList = ()=>{
    const { push } = useHistory();
    const { state} = useLocation<UseLocation>();
    const handleClick = () => {
        push("/home",{
            from:"/list",
        });
    }
    const dispatch = useDispatch();
    const requestList =()=> dispatch(loadDataAsync());
    const list = useSelector((state: AppState) => state.cookbookReducer.list)
    const handleGotoDetail= (title:string)=>()=>{
        push("/detail",{
            title,
            from:"/list",
        })
    }
    
    //if re-render current page the list array is empty so that before render check the length of list to re-request list
    useEffect(()=>{
        if(list.length <= 0){
            requestList()
        }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return{
        state,
        handleClick,
        handleGotoDetail,
        list
    }
}