import {PropsWithChildren} from "react";
import {useHistory} from "react-router-dom";

import Menu from './Menu';
import {Search} from "@/components";
import {
    CategoryWrap,
    NavUl
} from "./StyledCategroy";



interface CategoryUiProps{
    handleClick(type:string):void;
    type:string;
}

const CategoryUi = (props:PropsWithChildren<CategoryUiProps>)=>{
    const {handleClick,type} = props;
    const {push} = useHistory();
    //menu title transfer to list page;
    const onGotoList =(title:string)=>{
        push('/list',{
            title
        })
      }
    return (
        <CategoryWrap>
            <nav>
                <NavUl
                    color="#fff"
                    radius={1.5}
                >
                    <li 
                        className={type==="category"?'active':''}
                        onClick={()=>handleClick("category")}
                    >分类</li>
                    <li
                        className={type==="material"?'active':''}
                        onClick={()=>handleClick("material")}
                    >食材</li>
                    <li className={type==="category"?'slide': 'slide right'}></li>
                </NavUl>
            </nav>
            {/* background-color and radius different */}
            <Search
                outerbg="#fff"
                innerbg="#eee"
                hasborder={false}
                radius={0.48}
            />
            <Menu 
                type={type}
                onGotoList={(title:string)=>onGotoList(title)}
            />
        </CategoryWrap>
    )
}

export default CategoryUi