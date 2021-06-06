import { useEffect, useState,PropsWithChildren,memo } from "react";

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
    type:string
    onGotoList(title:string):void;
}

const Menu = (props:PropsWithChildren<MenuProps>) => {
    const [cate, setCate] = useState<Cate>();
    const [currentCate,setCurrentCate] = useState<string>("热门");
    const {type,onGotoList} = props;
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
    // console.log(cate&&cate![type]);
    const handleAsideClick = (item: string)=>setCurrentCate(item)
    



    // console.log(cate);
    useEffect(() => {
        request();
        type === "category"? setCurrentCate("热门"):setCurrentCate("肉类")
    }, [type])
  
    return (
       <MenuList 
        cate={cate&&cate![type]} 
        currentCate={currentCate} 
        cateContentArrays={cate&&cate[type][currentCate]}
        handleAsideClick={handleAsideClick}
        type={type}
        onGotoList={(title:string)=>onGotoList(title)}
       />
    )
}

export default memo(Menu);