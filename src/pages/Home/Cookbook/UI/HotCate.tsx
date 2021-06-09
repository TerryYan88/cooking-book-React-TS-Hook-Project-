
import {useHotCate} from "@/hooks/useHotCate";

import {H1Container} from "./StyledCookBook";
import { Grid } from 'antd-mobile';
import { HotCateWrap } from './StyledCookBook'







const HotCate = () => {
    const {hotCateList,handleClick} = useHotCate();
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