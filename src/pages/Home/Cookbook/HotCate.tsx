import { useEffect, useState } from "react";
import { Grid } from 'antd-mobile';
import { v4 as uuidv4 } from "uuid";

import { HotCateWrap } from './StyledCookBook'

interface DefaultState {
    id: string;
    title: string;
    img: string;
}


const defaultState: DefaultState[] = [
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2015/09/16/c640_201509161442371783820.jpg?x-oss-process=style/c320",
        title: "家常菜"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2018/11/20/2018112015426906295309702111.jpg?x-oss-process=style/c320",
        title: "汤"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2015/01/05/c640_201501051420460072724.jpg?x-oss-process=style/c180",
        title: "川菜"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152455529414313.jpg?x-oss-process=style/c180",
        title: "粤菜"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152455503391713.jpg?x-oss-process=style/c180",
        title: "早餐"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2017/07/31/20170731150146877350813.jpg?x-oss-process=style/c320",
        title: "火锅"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2018/04/24/20180424152456373531113.jpg?x-oss-process=style/c180",
        title: "素菜"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2015/01/21/c640_201501211421826764156.jpg?x-oss-process=style/c180",
        title: "粥"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2017/10/11/20171011150770405975413.jpg?x-oss-process=style/c180",
        title: "凉菜"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2018/04/25/20180425152464324522913.jpg?x-oss-process=style/c180",
        title: "烘焙"
    },
    {
        id: uuidv4(),
        img: "https://i3.meishichina.com/attachment/recipe/2015/07/27/c640_201507271437975925472.jpg?x-oss-process=style/c180",
        title: "饮品"
    },
    {
        id: uuidv4(),
        img: "blank",
        title: "更多..."
    }
]


const HotCate = () => {
    const [hotCateList, setHotCateList] = useState(defaultState);
    const [columnNum,setNum] = useState(0);
    const [width] = useState({width:window.innerWidth})
    useEffect(()=>{
        width.width<375?setNum(3):setNum(4);
    },[width])
    return (
        <HotCateWrap>
            <h1>热门分类</h1>
            <div>
                <Grid data={hotCateList}
                    columnNum={4}
                    hasLine={false}
                    renderItem={(dataItem:any) => (
                        <div className="grid-item">
                            <img src={dataItem.img} alt="" />
                            <div>
                                <span>{dataItem.title}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        </HotCateWrap>
    )
}

export default HotCate;