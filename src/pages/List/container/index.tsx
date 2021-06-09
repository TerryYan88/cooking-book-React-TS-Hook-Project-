/* eslint-disable react-hooks/rules-of-hooks */

import {useList} from "@/hooks/useList";
import useAnimate from "@/hooks/useAnimate";
import ListUi from "../ui/ListUi";





const List = () => {
    const {handleClick,state,list,handleGotoDetail} = useList();

    return (
        <ListUi handleClick={handleClick} title={state&&state.title} list={list} handleGotoDetail={(name:string)=>handleGotoDetail(name)} />
    )
}

export default useAnimate(List);