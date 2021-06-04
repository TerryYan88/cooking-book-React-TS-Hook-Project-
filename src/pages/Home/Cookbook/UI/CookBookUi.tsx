import { PropsWithChildren } from "react";
//react-computed attri
import memoize from "memoize-one";

import {List} from "@/redux/Cookbook/model/cookbook";
import {Container} from "../UI/StyledCookBook";
import Swiper from "../UI/Swiper";
import {Search} from '@/components';
import HotCate from '../UI/HotCate';
import TopTen from '../UI/TopTen';

export interface CookBookProps{
    list: List[]
}




const CookBookUi = (props:PropsWithChildren<CookBookProps>)=>{
    const swiper = memoize((list:List[])=> list.slice(0,5))
    const hostCate = memoize((list:List[])=> list.slice(0,10))
   


    // console.log(props.list);
    return (
        <Container>
            <header>美食大全</header>
            <Swiper list={swiper(props.list)}/>
            <Search
                outerbg="#f5f5f9"
                innerbg="#fff"
                hasborder={true}
            />
            <HotCate/>
            <TopTen list={hostCate(props.list)}/>
        </Container>
    )
}

export default CookBookUi;