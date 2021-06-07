import { PropsWithChildren,memo } from "react";

import {List} from "@/redux/Cookbook/model/cookbook";

import { 
    TopTenWrap,
    SubTitle 
} from "./StyledCookBook";
export interface TopTenProps{
    list: List[]
    handleGotoDetail(name:string):void;
}

const TopTen = (props: PropsWithChildren<TopTenProps>) => {
    const {handleGotoDetail} = props;
    //console.log(props.list);

    return (
        <TopTenWrap>
            <h1>精品好菜</h1>
            <ul>
                {
                    props.list.length > 0
                    && props.list.map(item => {
                        return (
                            <li key={item.id}
                                onClick={()=>handleGotoDetail(item.name)}
                            >
                                <div>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <SubTitle
                                        line={1}
                                    ><span>{item.all_click}</span>浏览<span>{item.favorites}</span>收藏</SubTitle>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </TopTenWrap>
    )
}

export default memo(TopTen);