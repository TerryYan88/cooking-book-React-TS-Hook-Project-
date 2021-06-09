import CookBookUi from '../UI/CookBookUi';
import useGetState from "@/pages/Home/Cookbook/container/useGetState";
import useGotoDetail from "@/pages/Home/Cookbook/container/useGotoDetail";
const CookBook = () => {
    const {list}= useGetState();
    const {handleGotoDetail}= useGotoDetail();
    return (
        <CookBookUi list={list} handleGotoDetail={(name:string)=>handleGotoDetail(name)}/>
    )
}

export default CookBook;