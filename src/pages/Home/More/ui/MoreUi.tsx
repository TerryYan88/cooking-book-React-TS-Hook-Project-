import { Fragment,PropsWithChildren } from "react";
import { Switch, NavBar } from "antd-mobile";
import { MoreWrap,TitleBar } from "../ui/StyledMore";


interface MoreUiProps{
    checked: boolean;
    handleChange():void;
}


const MoreUi = (props:PropsWithChildren<MoreUiProps>)=>{
    const {checked,handleChange}=props;
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

export default MoreUi