import { NavBar, Icon } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react";

import {loadDataAsync} from "@/redux/Cookbook/actions";
import { AppState } from "@/redux/rootStore";
import {
    ListWrap,
    SubTi,
    TitleBar,
    ListContainer
} from "../ui/StyleList";

interface UseLocation {
    title: string
}

const List = () => {
    const { goBack } = useHistory();
    const { state: { title } } = useLocation<UseLocation>();
    const handleClick = () => {
        goBack();
    }
    const dispatch = useDispatch();
    const requestList =()=> dispatch(loadDataAsync());
    const list = useSelector((state: AppState) => state.cookbookReducer.list)
    //if re-render current page the list array is empty so that before render check the length of list to re-request list
    useEffect(()=>{
        if(list.length <= 0){
            requestList()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <ListContainer>
            <TitleBar>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={handleClick}
                >
                    {title && title}
                </NavBar>
            </TitleBar>
            <ul>
                {
                    list&&list.map((value,idx) => {
                        return (
                            <ListWrap
                                width="0 0 1px 0"
                                key={value.id+idx}
                            >
                                <div>
                                    <img src={value.img} width="115" height="75" alt="" />
                                </div>
                                <div>
                                    <h1>{value.name}</h1>
                                    <SubTi line={1}>{value.burdens}</SubTi>
                                    <h3>{value.all_click}浏览 {value.favorites}收藏</h3>
                                </div>
                            </ListWrap>
                        )
                    })
                }
            </ul>
        </ListContainer>
    )
}

export default List;