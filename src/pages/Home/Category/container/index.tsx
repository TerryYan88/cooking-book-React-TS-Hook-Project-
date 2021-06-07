import {useCallback,memo} from "react";

import {useSelector,useDispatch} from "react-redux";
import {ActionsCate} from "@/redux/Category/models/actions-type";
import {AppState} from "@/redux/rootStore";
import CategoryUi from "../ui/CategroyUi";

const Category = ()=>{
    const cateType = useSelector((state:AppState)=>state.cateReducer.routeInfo.cateType);

    const dispatch = useDispatch();
    const changeCateType =(cateType:string)=> dispatch({type:ActionsCate.CATE_TYPE,cateType});
    const handleClick =useCallback((cateType:string)=>{
        changeCateType(cateType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
  return (
    <CategoryUi 
      type={cateType} 
      handleClick={handleClick} 
    />
  )
}

export default memo(Category);