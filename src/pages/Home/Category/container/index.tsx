import {useState} from "react";

import {Search} from "@/components";
import {CategoryWrap} from "./StyledCategroy";

const Category = ()=>{
    const [tabIndex,setTabIndex] = useState(0);
    const handleClick =(num:number)=>()=>setTabIndex(num);
    return (
        <CategoryWrap>
            <nav>
                <ul>
                    <li 
                        className={tabIndex===0?'active':''}
                        onClick={handleClick(0)}
                    >分类</li>
                    <li
                        className={tabIndex===1?'active':''}
                        onClick={handleClick(1)}
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
        </CategoryWrap>
    )
}

export default Category;