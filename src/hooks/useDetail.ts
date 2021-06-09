
import { useHistory, useLocation } from "react-router-dom";
interface Loaction {
    title: string
    from:string;
}

export const useDetail=()=>{
    const { push } = useHistory();
    const { state } = useLocation<Loaction>()
    const handleClick = () => {
        if(state.from === undefined){
            push("/home",{
                from:"/detail",
                title:state.title
            })
        }else{
            push(state.from,{
                from:"/detail",
                title:state.title
            })
        }  
    };
    return {
        handleClick,
        state
    }
}