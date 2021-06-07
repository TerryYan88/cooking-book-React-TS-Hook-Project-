/* eslint-disable react-hooks/rules-of-hooks */
import { NavBar, Icon } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";


import useAnimate from "@/hooks/useAnimate";
import { TitleBar,DetailWrap } from "../ui/StyledDetail"

interface Loaction {
    title: string
    from:string;
}

const Detail = () => {
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

export default useAnimate(Detail);