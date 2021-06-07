import { NavBar, Icon } from "antd-mobile";
import {PropsWithChildren} from "react";

import {UseLocation} from "../container"
import {List} from "@/redux/Cookbook/model/cookbook"
import {
    ListWrap,
    SubTi,
    TitleBar,
    ListContainer
} from "./StyleList";

interface ListUiProps{
    handleClick():void;
    title:string;
    list:List[]
    handleGotoDetail(name:string):void
}


const ListUi = (props:PropsWithChildren<ListUiProps>) => {
    const {handleClick,title,list,handleGotoDetail} = props;
    return (
        <ListContainer>
            <TitleBar>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={handleClick}
                >
                    {title && title}
                </NavBar>
            </TitleBar>
            <ul>
                {
                    list && list.map((value, idx) => {
                        return (
                            <ListWrap
                                width="0 0 1px 0"
                                key={value.id + idx}
                                onClick={handleGotoDetail(value.name)}
                            >
                                <div>
                                    <img src={value.img} width="115" height="75" alt="" />
                                </div>
                                <div>
                                    <h1>{value.name}</h1>
                                    <SubTi line={1}>{value.burdens}</SubTi>
                                    <h3>{value.all_click}浏览 {value.favorites}收藏</h3>
                                </div>
                            </ListWrap>
                        )
                    })
                }
            </ul>
        </ListContainer>
    )
}

export default ListUi;