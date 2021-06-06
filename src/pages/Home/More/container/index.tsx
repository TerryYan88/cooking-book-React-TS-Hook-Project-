
import {useDispatch,useSelector} from "react-redux";

import {MoreActions} from "@/redux/More/models/actions-types"
import {AppState} from "@/redux/rootStore";

import MoreUi from "../ui/MoreUi";




const More = () => {
    const checked = useSelector((state:AppState)=>state.moreReducers.checked)
    const dispatch = useDispatch();
    const handleChange = ()=>{
        dispatch({type:MoreActions.CHECKED_STATE,checked:!checked})
        localStorage.setItem('checked',JSON.stringify(checked))
    }
    return (
        <MoreUi checked={checked} handleChange={handleChange}/>
    )
}

export default More;