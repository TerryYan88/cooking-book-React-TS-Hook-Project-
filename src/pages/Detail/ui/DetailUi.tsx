import { NavBar, Icon } from "antd-mobile";
import {PropsWithChildren} from "react";
import { TitleBar,DetailWrap } from "./StyledDetail"


interface DetailUiProps{
    handleClick():void
    state:{
        title:string
    }
}

const DetailUi = (props:PropsWithChildren<DetailUiProps>) => {
    const {handleClick,state} = props;
    return (
        <div>
            <TitleBar>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={handleClick}
                >
                    {state && state.title}
                </NavBar>
            </TitleBar>
            <DetailWrap>
                <div>
                    <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1313/561c9a314c8bb.jpg/OTAweDYwMA" alt="" />
                </div>
                <div className="details">
                    <h1>{state && state.title}</h1>
                    <h3>23567 浏览 89560 收藏</h3>
                    <button>收藏</button>
                </div>
            </DetailWrap>
        </div>
    )
}

export default DetailUi;