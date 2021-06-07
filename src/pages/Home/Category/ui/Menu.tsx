/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState,PropsWithChildren,memo } from "react";
import {useSelector,useDispatch} from "react-redux";

import {ActionsCate} from "@/redux/Category/models/actions-type";
import {AppState} from "@/redux/rootStore";
import {MenuList} from "@/components";
import { get } from "@/utils/http";


export interface Cate {
    category: {
        [index: string]: string[]
    }
    material: {
        [index: string]: string[]
    }
}

interface MenuProps{
    onGotoList(title:string):void;
    type:string;
}

const Menu = (props:PropsWithChildren<MenuProps>) => {
    const [cate, setCate] = useState<Cate>();
    
    const {onGotoList} = props;
    //ajax async request
    const request = async () => {
        try {
            const result: any = await get({
                url: "/api/category"
            })
            setCate(result.data.data);
        } catch (err) {

        }
    }

    const cateAside = useSelector((state: AppState)=>state.cateReducer.routeInfo.cateAside);
    const dispatch = useDispatch();
    const changeCateAside = (cateAside:string)=>dispatch({type:ActionsCate.CATE_ASIDE,cateAside})
    const cateType = useSelector((state:AppState)=>state.cateReducer.routeInfo.cateType);

    // console.log(cate&&cate![type]);
    const handleAsideClick = (item: string)=>{
        changeCateAside(item)
    }

    useEffect(() => {
        request();
         changeCateAside(cateType=== "category"?"热门":"肉类");
    }, [cateType])

    return (
       <MenuList 
        cate={cate&&cate![cateType]} 
        currentCate={cateAside} 
        cateContentArrays={cate&&cate[cateType][cateAside]}
        handleAsideClick={handleAsideClick}
        type={cateType}
        onGotoList={(title:string)=>onGotoList(title)}
       />
    )
}

export default memo(Menu);