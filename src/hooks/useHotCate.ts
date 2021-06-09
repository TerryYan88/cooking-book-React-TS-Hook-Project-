/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState,useCallback } from "react";
import {useHistory} from "react-router-dom";
import {get} from "@/utils/http";


interface DefaultState {
    id: string;
    title: string;
    img: string;
}

export const useHotCate = ()=>{
    const {push}= useHistory();
    const [hotCateList,setHotCateList] = useState<DefaultState[]>([]);
    const requestHotCateList = async()=>{
        try{
            const result:any = await get({
                url:"/api/hotcat"
            })
            setHotCateList(result.data);
        }catch(err){}
    }
    useEffect(()=>{
        requestHotCateList()
    },[])

    const handleClick =useCallback(
        (title:string)=>{
        push("/list",{
            title,
            from:"/home",
        })
    },
    [])

    return{
        hotCateList,
        handleClick
    }
}