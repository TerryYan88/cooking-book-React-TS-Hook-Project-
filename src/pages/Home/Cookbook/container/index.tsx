import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';
import { useHistory } from "react-router";
import {AppState} from "@/redux/rootStore";
import CookBookUi from '../UI/CookBookUi';
import {loadDataAsync} from "@/redux/Cookbook/actions";

const CookBook = () => {
    const dispatch = useDispatch();
    const list = useSelector((state:AppState)=>state.cookbookReducer.list)
    const requestList = ()=> dispatch(loadDataAsync());
    const {push} = useHistory();
    const handleGotoDetail =(title:string)=>{
        push('/detail',{
            title,
        })
    }   

    useEffect(()=>{
        //request list
        requestList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <CookBookUi list={list} handleGotoDetail={(name:string)=>handleGotoDetail(name)}/>
    )
}

export default CookBook;