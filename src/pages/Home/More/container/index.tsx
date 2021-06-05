import { Fragment } from "react";
import { Switch, NavBar } from "antd-mobile";
import {useDispatch,useSelector} from "react-redux";

import {MoreActions} from "@/redux/More/models/actions-types"
import {AppState} from "@/redux/rootStore";
import { MoreWrap,TitleBar } from "./StyledMore";
import MoreUi from "../ui/MoreUi";




const More = () => {
    const checked = useSelector((state:AppState)=>state.moreReducers.checked)
    const dispatch = useDispatch();
    const handleChange = ()=>{
        dispatch({type:MoreActions.CHECKED_STATE,checked:!checked})
        //localStorage to save checked state;
        localStorage.setItem('checked',JSON.stringify(checked))
    }
    return (
        <Fragment>
                <TitleBar>
                    <NavBar
                        mode="dark"
                    >更多</NavBar>
                </TitleBar>
            <MoreWrap>
                <span>显示地图:</span>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                />
            </MoreWrap>
        </Fragment>
    )
}

export default More;