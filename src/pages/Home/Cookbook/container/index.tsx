import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';

import {AppState} from "@/redux/rootStore";
import CookBookUi from '../UI/CookBookUi';
import {loadDataAsync} from "@/redux/Cookbook/actions";

const CookBook = () => {
    const dispatch = useDispatch();
    const list = useSelector((state:AppState)=>state.cookbookReducer.list)
    const requestList = ()=> dispatch(loadDataAsync());
    useEffect(()=>{
        //request list
        requestList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <CookBookUi list={list}/>
    )
}

export default CookBook;