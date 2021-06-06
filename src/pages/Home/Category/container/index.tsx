import {useState,useCallback,memo} from "react";

import CategoryUi from "../ui/CategroyUi";

const Category = ()=>{
    const [tabIndex,setTabIndex] = useState(0);
    const [type,setType] = useState("category");

    const handleClick =useCallback((index:number)=>{
        setTabIndex(index);
        index===0?setType("category"):setType("material");
    },[]);

  return (
    <CategoryUi 
      tabIndex={tabIndex} 
      type={type} 
      handleClick={handleClick} 
    />
  )
}

export default memo(Category);