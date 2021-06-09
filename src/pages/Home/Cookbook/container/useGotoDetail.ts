import { useHistory } from "react-router";

const useGotoDetail = ()=>{
    const {push} = useHistory();
    const handleGotoDetail =(title:string)=>{
        push('/detail',{
            title,
        })
    }   
    return {
        handleGotoDetail
    }
}

export default useGotoDetail;