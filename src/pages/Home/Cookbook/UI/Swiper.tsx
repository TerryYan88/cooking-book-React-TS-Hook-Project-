import { Carousel } from 'antd-mobile';
import {PropsWithChildren} from "react";
import {CookBookProps} from "./CookBookUi";
import {SwiperWrap} from "./StyledCookBook";



const Swiper = (props:PropsWithChildren<CookBookProps>) => {

    return (
        <SwiperWrap>
            <Carousel
                autoplay={true}
                infinite
            >
                {
                    props.list.length>0
                    &&props.list.map(item=>{
                        return <img key={item.id} src={item.img} alt={item.name}/>
                    })
                }
            </Carousel>
        </SwiperWrap>
    );
}

export default Swiper;