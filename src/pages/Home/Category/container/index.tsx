import {memo} from "react";

import {useCategory} from "@/hooks/useCategory";
import CategoryUi from "../ui/CategroyUi";

const Category = ()=>{
  const {cateType,handleClick} = useCategory();
  return (
    <CategoryUi 
      type={cateType} 
      handleClick={handleClick} 
    />
  )
}

export default memo(Category);