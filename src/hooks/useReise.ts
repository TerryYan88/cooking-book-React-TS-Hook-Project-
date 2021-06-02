import {useState,useCallback,useEffect} from "react";

export const useResize = ()=>{
    const [height,setHeight] = useState({
        height:document.documentElement.clientHeight
    });
    
    const onResize = useCallback(()=>{
        setHeight({height:document.documentElement.clientHeight})
    },[])

    useEffect(()=>{
        window.addEventListener("resize",onResize)
        return ()=>window.removeEventListener("resize",onResize);
    },[onResize])
    
    return height;
}