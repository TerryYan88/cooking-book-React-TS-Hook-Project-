import {PropsWithChildren,memo} from "react";


import {Cate} from "@/pages/Home/Category/ui/Menu"
import MenuWrap from "./StyledMenuList";

interface MenuListProps{
    cate:Cate;
    cateContentArrays:string[];
    currentCate:string;
    handleAsideClick(item:string):void;
    type:string;
    onGotoList(title:string):void;
}

const MenuList = (props:PropsWithChildren<MenuListProps>) => {
    const {cate,currentCate,handleAsideClick,cateContentArrays,onGotoList} = props

    return (
        <MenuWrap
            width="1px 0 0 0"
        >
            <aside>
                <ul>
                    {
                        cate&&Object.keys(cate).map((item,index) => {
                            return (
                                <li 
                                    key={index} 
                                    className={currentCate===item?"active":""}
                                    onClick={()=>handleAsideClick(item)}
                                >
                                    <span>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
            <section>
                <ul>
                    {
                        cateContentArrays&&cateContentArrays.map((item,index)=>{
                           return (
                               <li
                                key={index}
                                onClick={()=>onGotoList(item)}
                               >{item}</li>
                           )
                       })
                    }
                </ul>
            </section>
        </MenuWrap>
    )
}

export default memo(MenuList);