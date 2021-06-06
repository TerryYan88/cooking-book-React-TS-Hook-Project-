import { PropsWithChildren,memo } from "react";

import { CookBookProps } from "./CookBookUi";
import { 
    TopTenWrap,
    SubTitle 
} from "./StyledCookBook";


const TopTen = (props: PropsWithChildren<CookBookProps>) => {
    //console.log(props.list);
    return (
        <TopTenWrap>
            <h1>精品好菜</h1>
            <ul>
                {
                    props.list.length > 0
                    && props.list.map(item => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div>
                                    <p>西芹泡椒爆鱿鱼</p>
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