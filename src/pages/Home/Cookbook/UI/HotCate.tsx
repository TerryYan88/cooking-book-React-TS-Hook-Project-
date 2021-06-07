import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

import {get} from "@/utils/http";
import {H1Container} from "./StyledCookBook";
import { Grid } from 'antd-mobile';
import { HotCateWrap } from './StyledCookBook'

interface DefaultState {
    id: string;
    title: string;
    img: string;
}





const HotCate = () => {
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

    const handleClick = (title:string)=>{
        push("/list",{
            title,
            from:"/home",
        })
    }
    return (
        <HotCateWrap>
            <H1Container
                width="0 0 1px 0"
            >热门分类</H1Container>
            <div>
                <Grid 
                    data={hotCateList}
                    columnNum={3}
                    hasLine={false}
                    renderItem={(dataItem:any) => (
                        <div className="grid-item">
                            <img src={dataItem.img} alt="" />
                            <div>
                                <span>{dataItem.title}</span>
                            </div>
                        </div>
                    )}
                    onClick={(el:any)=>handleClick(el.title)}
                />
            </div>
        </HotCateWrap>
    )
}

export default HotCate;