import { Carousel } from 'antd-mobile';
import {PropsWithChildren} from "react";

import {SwiperWrap} from "./StyledCookBook";
import {List} from "@/redux/Cookbook/model/cookbook";
interface SwiperProps{
    list:List[];
    handleGotoDetail(name:string):void;
}

const Swiper = (props:PropsWithChildren<SwiperProps>) => {
    const {handleGotoDetail} = props;
    return (
        <SwiperWrap>
            <Carousel
                autoplay={true}
                infinite
            >
                {
                    props.list.length>0
                    &&props.list.map(item=>{
                        return <img
                            key={item.id} 
                            src={item.img} 
                            alt={item.name}
                            onClick={()=>handleGotoDetail(item.name)}
                         />
                    })
                }
            </Carousel>
        </SwiperWrap>
    );
}

export default Swiper;