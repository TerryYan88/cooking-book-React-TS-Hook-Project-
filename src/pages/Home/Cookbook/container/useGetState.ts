import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';
import {AppState} from "@/redux/rootStore";
import {loadDataAsync} from "@/redux/Cookbook/actions";


const useGetState = ()=>{
    const dispatch = useDispatch();
    const list = useSelector((state:AppState)=>state.cookbookReducer.list)
    const requestList = ()=> dispatch(loadDataAsync());
  

    useEffect(()=>{
        //request list
        requestList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return{
        list
    }
}

export default useGetState;