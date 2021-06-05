import {PropsWithChildren} from "react";


import Menu from '../container/Menu';
import {Search} from "@/components";
import {CategoryWrap} from "../container/StyledCategroy";



interface CategoryUiProps{
    tabIndex:number;
    handleClick(index:number):void;
    type:string;
}

const CategoryUi = (props:PropsWithChildren<CategoryUiProps>)=>{
    const {tabIndex,handleClick,type} = props;
    return (
        <CategoryWrap>
            <nav>
                <ul>
                    <li 
                        className={tabIndex===0?'active':''}
                        onClick={()=>handleClick(0)}
                    >分类</li>
                    <li
                        className={tabIndex===1?'active':''}
                        onClick={()=>handleClick(1)}
                    >食材</li>
                    <li className={tabIndex===0?'slide': 'slide right'}></li>
                </ul>
            </nav>
            {/* background-color and radius different */}
            <Search
                outerbg="#fff"
                innerbg="#eee"
                hasborder={false}
            />
            <Menu type={type}/>
        </CategoryWrap>
    )
}

export default CategoryUi