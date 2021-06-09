/* eslint-disable react-hooks/rules-of-hooks */


import {useDetail} from "@/hooks/useDetail";
import DetailUi from "../ui/DetailUi";
import useAnimate from "@/hooks/useAnimate";




const Detail = () => {
    const {state,handleClick} = useDetail();
    return (
        <DetailUi handleClick={handleClick} state={state}/>
    )
}

export default useAnimate(Detail);